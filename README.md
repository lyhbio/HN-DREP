## HN-DREP: Heterogeneous Network-based Drug Repositioning Evaluation and Prediction database
The HN-DREP database is a platform that is dedicated to evaluating heterogeneous network-based drug repositioning methods and predicting drug-disease associations. It provides an impartial assessment of existing network-driven drug repositioning methods and consolidates predictions from various repositioning methods. This summary represents the current stage of research on heterogeneous network-based drug repositioning methods, which aims to promote the development of drug repositioning.  
## Web app
- HN-DREP is available at: http://hn-drep.lyhbio.com.  
- Docker is available at: https://zenodo.org/records/10674628.
## Components

Our web application consists of two main components:

- **Frontend (DrugRepositionUI)**: This component contains the user interface of our application, built with React. It handles the presentation layer and user interactions, providing an intuitive and interactive experience for users.

- **Backend (DrugRepositionApi)**: This component serves as the backend of our application, developed with the LNMP (Linux, Nginx, MySQL, PHP) stack. It handles data processing, business logic, and communication with the frontend. The backend is responsible for serving API endpoints, querying databases, and conducting data analysis for drug repositioning.

By separating the frontend and backend into distinct components, we ensure modularity, scalability, and maintainability of our web application architecture.

## Reproducing Our Web Application with Docker: A Step-by-Step Guide
1. **Download Repository Data**: Begin by downloading all data from the repository containing the Drug Repositioning Platform codebase. This ensures that the Docker build process has access to all required files and dependencies.Data is available at：[https://zenodo.org/records/10674628](https://zenodo.org/records/10674628).
2. **Navigate to Dockerfile Directory**: Open a terminal or command prompt and navigate to the directory containing the Dockerfile. This file specifies the configuration and dependencies for our Drug Repositioning Platform.
~~~
cd drug
~~~
3. **Pull Base Image**: Start by pulling the required base image from Docker Hub. In this case, we use the PHP 8.1.9 FPM image with the Bullseye distribution.
~~~
docker pull php:8.1.9-fpm-bullseye
~~~
4. **Build Custom Image**: Initiate the image build process using the Dockerfile.
~~~
docker build --no-cache -t cqupt/hn-drep:latest ./
~~~
5. **Modify Hosts File**: Update the hosts file on the host machine to ensure proper domain resolution. For Windows users, this file is typically located at `C:\Windows\System32\drivers\etc\hosts`. Append the following line to the end of the file:
~~~
127.0.0.1 api
~~~
6. **Run Container**: Execute the Docker run command to launch the containerized application. Replace the directory paths `{codedir}` with the respective locations of your codebase on the host machine.
~~~
docker run --name drug -itd -p 80:80 -v {codedir}/DrugRepositionUI:/htdocs/DrugRepositionUI:rw -v {codedir}/DrugRepositionApi:/htdocs/DrugRepositionApi:rw cqupt/hn-drep:latest /bin/bash
~~~
7. **Access via Browser**: Open your preferred web browser and navigate to localhost to access the Drug Repositioning Platform.
Conclusion

By following these steps, you can establish a Docker environment tailored for the development and deployment of a Drug Repositioning Platform
## Technical Information
- **Frontend**:
Framework: React, chosen for its component-based development approach and excellent rendering performance.
Responsive Design: Pages are designed with responsive layouts, adapting seamlessly to various screen sizes and resolutions for enhanced user accessibility across devices.
Mainstream Frameworks: Utilizes the React framework, one of the three major frontend frameworks alongside Angular and Vue, known for its efficiency in development and improved user experience.  

- **Backend**:
Technology Stack: Employed the LNMP stack (Linux, Nginx, MySQL, PHP) for the backend infrastructure.
Linux: Selected for its efficiency and security, dominating the server operating system market.
Nginx: Chosen for its lightweight nature and high performance in web environments.
MySQL: Widely adopted due to its robust concurrency handling capabilities.
PHP: A longstanding choice in web development, offering versatility and reliability.
Caching and Search Optimization: Implemented Redis caching and Elasticsearch as a search engine, enhancing system responsiveness. Hot data such as drugs and diseases are stored in Redis and Elasticsearch, prioritizing cache access to improve performance.
Elasticsearch Integration: Utilized for keyword searches in drugs and diseases search functionalities, leveraging its indexing capabilities for enhanced search accuracy.  

- **Deployment**:
Kubernetes: Entire system deployed on Kubernetes for efficient management and scalability.
Ingress Controller: Acts as a load balancer, distributing traffic to pods within the cluster. Kubernetes automatically handles pod failures, ensuring high availability by creating and assigning new pods to nodes with lower loads.
