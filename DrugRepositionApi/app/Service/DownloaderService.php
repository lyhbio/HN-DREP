<?php

namespace App\Service;

use Illuminate\Filesystem\Filesystem;

class DownloaderService
{
    public function __construct(private Filesystem $filesystem)
    {
    }

    public function generateDirectoryInfoArray($path)
    {
        $infoArray = [];

        if ($this->filesystem->isDirectory($path)) {
            $directories = $this->filesystem->directories($path);
            foreach ($directories as $directory) {
                $subDirectoryInfo = $this->generateDirectoryInfoArray($directory);
                $directorySize = $this->calculateDirectorySize($directory);
                $infoArray[] = [
                    'type' => 'directory',
                    'path' => str_replace(
                        str_replace('\\', '/', storage_path('app/public/drug_repositioning_download/'))
                        , '', str_replace('\\', '/', $directory)),
                    'name' => basename($directory),
                    'size' => $directorySize,
                    'children' => $subDirectoryInfo,
                ];
            }

            $files = $this->filesystem->files($path);
            foreach ($files as $file) {
                $fileSize = $file->getSize();
                $infoArray[] = [
                    'type' => 'file',
                    'name' => $file->getBasename(),
                    'path' => str_replace(
                        str_replace('\\', '/', storage_path('app/public/drug_repositioning_download/'))
                        , '', str_replace('\\', '/', $file->getPathname())),
                    'size' => $fileSize,
                ];
            }
        } else {
            $infoArray[] = [
                'type' => 'file',
                'name' => $path,
                'size' => $this->filesystem->size($path),
            ];
        }

        return $infoArray;
    }

    private function calculateDirectorySize($directory)
    {
        $totalSize = 0;

        $files = $this->filesystem->allFiles($directory);
        foreach ($files as $file) {
            $totalSize += $file->getSize();
        }

        return $totalSize;
    }
}
