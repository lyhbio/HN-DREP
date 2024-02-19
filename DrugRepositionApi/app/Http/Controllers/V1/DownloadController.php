<?php

namespace App\Http\Controllers\V1;

use App\Exceptions\BusinessException;
use App\Http\Controllers\CommonController;
use App\Http\Request\Request;
use App\Service\DownloaderService;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use ZipArchive;

class DownloadController extends CommonController
{
    protected $filesystem;

    public function __construct()
    {
        $this->filesystem = new Filesystem();
    }

    public function downloadFolder(Request $request)
    {
        $request->validate([
            'path' => 'required|string|min:1|max:500',
        ]);
        $path = $request->input('path', '');
        $folderPath = storage_path(sprintf('app/public/drug_repositioning_download/%s', $path));
        $tmpFile = storage_path('app/public/tmp/' . Str::uuid());
        touch($tmpFile);
        try {
            $zip = new ZipArchive();
            if ($zip->open($tmpFile, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
                if (is_file($folderPath) && file_exists($folderPath)) {
                    $zip->addFile($folderPath, basename($folderPath));
                } else if (is_dir($folderPath)) {
                    // 递归地将文件夹中的所有文件和子文件夹添加到 ZIP 文件中
                    $files = new RecursiveIteratorIterator(
                        new RecursiveDirectoryIterator($folderPath),
                        RecursiveIteratorIterator::LEAVES_ONLY
                    );
                    foreach ($files as $file) {
                        if (!$file->isDir()) {
                            $filePath = $file->getRealPath();
                            $relativePath = substr($filePath, strlen($folderPath) + 1);
                            $zip->addFile($filePath, $relativePath);
                        }
                    }
                } else {
                    throw new BusinessException('文件或目录不存在');
                }
                $zip->close();
                // 创建一个自定义的响应实例
                $response = new Response();
                $response->headers->set('Content-Type', 'application/zip');
                $response->headers->set('Content-Disposition', 'attachment; filename="download.zip"');
                $response->headers->set('Content-Length', filesize($tmpFile));

                // 设置响应内容为 ZIP 文件内容
                $response->setContent(file_get_contents($tmpFile));

                // 删除临时文件
                unlink($tmpFile);

                return $response;
            }
        } catch (\Throwable $e) {
            return $this->fail(new BusinessException($e->getMessage()));
        }
    }

    public function files(Request $request)
    {
        $folderPath = storage_path('app/public/drug_repositioning_download/');
        return $this->success(
            app()->make(DownloaderService::class)->generateDirectoryInfoArray($folderPath)
        );
    }
}
