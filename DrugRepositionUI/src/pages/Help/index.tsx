import { FilePdfOutlined } from '@ant-design/icons';
import { Button, Image, Row, Typography } from 'antd';

import fig1Home from '@/assets/help/fig1-home.png';
import fig10Usability from '@/assets/help/fig10-usability.png';
import fig11Search from '@/assets/help/fig11-search.png';
import fig12DrugDetailed from '@/assets/help/fig12-drug_detailed.png';
import fig13Disease from '@/assets/help/fig13-disease.png';
import fig14Download from '@/assets/help/fig14-download.png';
import fig2Statistics from '@/assets/help/fig2-statistics.png';
import fig3Methods from '@/assets/help/fig3-methods.png';
import fig4MethodDetailed from '@/assets/help/fig4-method_detailed.png';
import fig5Dataset from '@/assets/help/fig5-dataset.png';
import fig6DatasetDetailed from '@/assets/help/fig6-dataset_detailed.png';
import fig7Overall from '@/assets/help/fig7-overall.png';
import fig8Performance1 from '@/assets/help/fig8-performance1.png';
import fig9Scalability from '@/assets/help/fig9-scalability.png';

import './style.less';

export default () => {
  return (
    <>
      <Row justify="end" className="mb-md">
        <Button
          icon={<FilePdfOutlined />}
          type="primary"
          onClick={() => {
            window.open('/help.pdf', '_blank');
          }}
        >
          pdf
        </Button>
      </Row>
      <div className="help-main-container">
        <div className="Table of Contents" id="table-of-contents">
          <Typography.Title level={4}>Table of Contents</Typography.Title>
          <ul>
            <li>
              <a href="">Table of Contents</a>
            </li>
            <li>
              <a href="#hn-drep">About HN-DREP</a>
            </li>
            <li>
              <a href="#Homepage">1. Homepage</a>
            </li>
            <li>
              <div>
                <a href="#Browse">2. Browse</a>
              </div>
              <ul>
                <li>
                  <a href="#Methods">2.1. Methods</a>
                </li>
                <li>
                  <a href="#Datasets">2.2. Datasets</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Evaluation">3. Evaluation</a>
            </li>
            <li>
              <div>
                <a href="#Predict">4. Predict</a>
              </div>
              <ul>
                <li>
                  <a href="#Drug">4.1. Drug</a>
                </li>
                <li>
                  <a href="#Disease">4.2 Disease</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#download">5. Download</a>
            </li>
          </ul>
        </div>
        <div className="About HN-DREP" id="hn-drep">
          <Typography.Title level={4}>About HN-DREP</Typography.Title>
          <Typography.Text>
            The HN-DREP database is a platform that is dedicated to evaluating
            heterogeneous network-based drug repositioning methods and
            predicting drug-disease associations. It provides an impartial
            assessment of existing network-driven drug repositioning methods and
            consolidates predictions from various repositioning methods. This
            summary represents the current stage of research on heterogeneous
            network-based drug repositioning methods, which aims to promote the
            development of drug repositioning.
          </Typography.Text>
        </div>
        <div className="mt-md one" id="Homepage">
          <Typography.Title level={4}>1. Homepage</Typography.Title>
          <Typography.Text>
            The HN-DREP homepage briefly describes the database and research
            framework. It contains three main sections: About HN-DREP, Research
            Framework, and Statistics.
          </Typography.Text>
          <ul className="mt-md">
            <li>
              About HN-DREP: This section provides an introduction to HN-DREP,
              clarifying what it does, what functions it provides, and what it
              means.(Fig. 1 ①)
            </li>
            <li>
              Research Framework: This section is a framework for our evaluation
              of heterogeneous network-based drug repositioning methods.(Fig. 1
              ②)
            </li>
            <li>
              Statistics：This section is the statistics of the data, including
              the methods evaluated, the datasets used, the drugs included, the
              diseases, and the number of drug-disease associations
              predicted.(Fig. 2)
            </li>
          </ul>
          <div className="image-box">
            <Image src={fig1Home} preview={false} />
            <Row justify="center">
              <Typography.Text className="mt-md">
                Fig 1. The HN-DREP homepage
              </Typography.Text>
            </Row>
          </div>
          <div className="image-box">
            <Image src={fig2Statistics} preview={false} />
            <Row justify="center">
              <Typography.Text className="mt-md">
                Fig 2. The statistics section of the HN-DREP homepage
              </Typography.Text>
            </Row>
          </div>
        </div>
        <div className="mt-md two" id="Browse">
          <div>
            <Typography.Title level={4}>2. Browse</Typography.Title>
            <Typography.Text>
              Clicking the Browse button in the navigation bar will take you to
              the Browse page. The Browse page lists the used drug repositioning
              methods and datasets in our evaluation. Click on the hyperlinks to
              access more detailed information and the evaluation results.
            </Typography.Text>
          </div>
          <div className="mt-md" id="Methods">
            <Typography.Title level={5}>2.1. Methods</Typography.Title>
            <ul>
              <li>
                Users can directly browse all heterogeneous network-based drug
                repositioning methods used in our evaluation in this page. This
                page gives the basic information for each method: languages,
                category, algorithms, network, overall score, performance score,
                scalability score, workflow, and swipe the table to the right to
                see more information, such as code address, doi number and
                method description etc. You can also click on settings to show
                only what you choose and sort the methods the way you want.
                (Fig. 3 ②)
              </li>
              <li>
                For more detailed method information, click on the corresponding
                method line to navigate to the method detail page. (Fig. 3 ③)
              </li>
              <li>
                The method info block displays the basic method information
                shown in the Browse page.(Fig. 4 ②)
              </li>
              <li>
                The method performance on all datasets block displays the basic
                dataset information and the evaluation performance results of
                the method on this dataset, including AUC, AUPR, F1, AUC Curve,
                AUPR Curve, Time usage and Memory Usage.(Fig. 4 ③)
              </li>
              <li>
                The Method Predicted Results block shows the prediction results
                of the methods for all datasets, categorized according to the
                dataset. The page block shows only the first 100 prediction
                results of the methods for each dataset with a prediction score
                greater than 0.5. If you want to get the full results, you can
                get them on the download page.(Fig. 4 ④)
              </li>
            </ul>
            <div className="image-box">
              <Image src={fig3Methods} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 3. The Browse methods page of the HN-DREP
                </Typography.Text>
              </Row>
            </div>
            <div className="image-box">
              <Image src={fig4MethodDetailed} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 4. The method detailed page of the HN-DREP
                </Typography.Text>
              </Row>
            </div>
          </div>
          <div className="mt-md" id="Datasets">
            <Typography.Title level={5}>2.2. Datasets</Typography.Title>
            <ul>
              <li>
                Users can directly browse all datasets we used by clicking on
                the Datasets button in Browse page. This page gives the basic
                information for each dataset, including the dataset name,
                numbers of drug,numbers of disease, numbers of drug-disease
                associations and doi number.(Fig. 5 ②)
              </li>
              <li>
                For more detailed dataset information, click on the
                corresponding dataset line to navigate to the dataset detail
                page. (Fig. 5 ③)
                <ul className="mt-sm">
                  <li>
                    The dataset info block displays the basic dataset
                    information.(Fig. 6 ②)
                  </li>
                  <li>
                    The method performance on dataset block displays the basic
                    method information and the evaluation performance results of
                    the method on this dataset, including AUC, AUPR, F1, AUC
                    Curve, AUPR Curve, Time usage and Memory Usage.(Fig. 6 ③)
                  </li>
                  <li>
                    The Method Predicted Results block shows the prediction
                    results of the methods on datasets, categorized by the
                    methods. The page block only shows the first 100 prediction
                    results of the method on each dataset with a prediction
                    score greater than 0.5. If you wish to access the complete
                    results, you can find them on the download page.(Fig. 6 ④)
                  </li>
                </ul>
              </li>
            </ul>
            <div className="image-box">
              <Image src={fig5Dataset} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 5. The Browse datasets page of the HN-DREP
                </Typography.Text>
              </Row>
            </div>
            <div className="image-box">
              <Image src={fig6DatasetDetailed} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 6. The dataset detailed page of the HN-DREP
                </Typography.Text>
              </Row>
            </div>
          </div>
        </div>
        <div className="mt-md three" id="Evaluation">
          <div>
            <Typography.Title level={4}>3. Evaluation</Typography.Title>
            <Typography.Text>
              Click the Evaluation button in the navigation bar to enter the
              evaluation results page. The Evaluation page presents the
              comprehensive evaluation results for the various methods we have
              employed, focusing on three critical aspects: Performance,
              Scalability and Usability. Click on the hyperlinks to access more
              detailed information within the evaluation results. The detail
              pages contain essential information about the method and dataset,
              as well as specific evaluation results. Our evaluation workflow is
              available at: https:././github.com./lyhbio./HN-DRES .
            </Typography.Text>
          </div>
          <ul>
            <li>
              <div>
                Overall page provides a concise summary of three
                aspects：Performance, Scalability and Usability. You can click
                the corresponding button to sort the methods the way you want.
                For more detailed method evaluation results, click on the
                corresponding method line to navigate to the method detail
                page.(Fig. 7)
              </div>
              <div className="image-box">
                <Image src={fig7Overall} preview={false} />
                <Row justify="center">
                  <Typography.Text className="mt-md">
                    Fig 7. The overall evalutaion results: Performance,
                    Scalability and Usability
                  </Typography.Text>
                </Row>
              </div>
            </li>
            <li>
              <div>
                Performance page displays the performance of the evaluated
                method, as measured by metrics such as AUC, AUPR, and F1 value.
                You can click on the corresponding buttons to display the
                results in Table show, Shape show, 3D show. You can also click
                on a method, dataset, or table element to access the evaluation
                details.(Fig. 8)
              </div>
              <div className="image-box">
                <Image src={fig8Performance1} preview={false} />
                <Row justify="center">
                  <Typography.Text className="mt-md">
                    Fig 8. The method performance evalutaion results
                  </Typography.Text>
                </Row>
              </div>
            </li>
            <li>
              <div>
                Scalability page offers insights into the computational demands
                in terms of time and memory required for method execution.
                Similarly, you can access the assessment details by clicking on
                the corresponding hyperlinks.(Fig. 9)
              </div>
              <div className="image-box">
                <Image src={fig9Scalability} preview={false} />
                <Row justify="center">
                  <Typography.Text className="mt-md">
                    Fig 9. The method scalability evalutaion results
                  </Typography.Text>
                </Row>
              </div>
            </li>
            <li>
              <div>
                Usability page shows the user-friendliness and quality of the
                method, among other factors.(Fig. 10)
              </div>
              <div className="image-box">
                <Image src={fig10Usability} preview={false} />
                <Row justify="center">
                  <Typography.Text className="mt-md">
                    Fig 10. The method usability evalutaion results
                  </Typography.Text>
                </Row>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-md four" id="Predict">
          <div>
            <Typography.Title level={4}>4. Predict</Typography.Title>
            <Typography.Text>
              Click the Predict button in the navigation bar to enter the
              predict page. The prediction menu integrates multiple drug
              repositioning methods to provide drug-disease association
              prediction functions. You can query the entries related to the
              drug or disease based on its ID and name and download them.(Fig.
              11)
            </Typography.Text>
            <div className="image-box">
              <Image src={fig11Search} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 11. The HN-DREP search page
                </Typography.Text>
              </Row>
            </div>
          </div>
          <div className="mt-md" id="Drug">
            <Typography.Title level={5}>4.1. Drug</Typography.Title>
            <ul>
              <li>
                You can search by drug id or name to get to the drug details, a
                page that includes basic information about the drug (DrugBank
                ID, targets, Type, Chemical Formula, ATC codes, Smiles, 2D
                structure, 3D structure etc.), as well as entries on associated
                diseases that are predicted by integrating all the methods.
              </li>
              <li>
                The detailed page has the basic information of the searched
                drug, and the prediction results associated with it. The left
                form is an aggregation of all the results on the right,
                including the name of the predicted diseases, the number of
                times it occurs, and which methods predicted the entry, and the
                right side is the prediction disease results of a single method
                for this drug, including disease name and its IDs.(Fig. 12)
              </li>
            </ul>
            <div className="image-box">
              <Image src={fig12DrugDetailed} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 12. The drug detailed page of HN-DREP
                </Typography.Text>
              </Row>
            </div>
          </div>
          <div className="mt-md" id="Disease">
            <Typography.Title level={5}>4.2 Disease</Typography.Title>
            <ul>
              <li>
                You can search by disease id (Mesh ID, OMIM ID, DO ID, MedGen
                ID) or disease name to get to the disease details, a page that
                includes basic information about the disease (OMIM ID, MeSH ID,
                DO ID, MedGen ID, etc.), as well as entries on associated drugs
                that are predicted by integrating all the methods.
              </li>
              <li>
                The detailed page has the basic information of the searched
                disease, and the prediction results associated with it. The left
                form is an aggregation of all the results on the right,
                including the name of the predicted drugs, the number of times
                it occurs, and which methods predicted the entry, and the right
                side is the prediction disease results of a single method for
                this diseases, including drug name and its DrugBank ID.(Fig. 13)
              </li>
            </ul>
            <div className="image-box">
              <Image src={fig13Disease} preview={false} />
              <Row justify="center">
                <Typography.Text className="mt-md">
                  Fig 13. The disease detailed page of HN-DREP
                </Typography.Text>
              </Row>
            </div>
          </div>
        </div>
        <div className="mt-md five" id="download">
          <Typography.Title level={5}>5. Download</Typography.Title>
          <Typography.Text>
            Click the Download button in the navigation bar to enter the
            download page. On the download page, you can download the all data
            we used.(Fig. 14)
          </Typography.Text>
          <ul className="mt-md">
            <li>
              The drug and disease information contained in the dataset. It
              includes drug name and drug id, disease name and disease id.
            </li>
            <li>
              All datasets we used. It contains the dataset required by the
              method.
            </li>
            <li>The prediction results of all methods on the datasets.</li>
          </ul>
          <div className="image-box">
            <Image src={fig14Download} preview={false} />
            <Row justify="center">
              <Typography.Text className="mt-md">
                Fig 14. The download page of HN-DREP
              </Typography.Text>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
