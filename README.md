## HN-DREP: Heterogeneous Network-based Drug Repositioning Evaluation and Prediction database
The HN-DREP database is a platform that is dedicated to evaluating heterogeneous network-based drug repositioning methods and predicting drug-disease associations. It provides an impartial assessment of existing network-driven drug repositioning methods and consolidates predictions from various repositioning methods. This summary represents the current stage of research on heterogeneous network-based drug repositioning methods, which aims to promote the development of drug repositioning.  
## Web app
HN-DREP is available at: http://hn-drep.lyhbio.com.  
## Technical Information
Frontend:
Framework: React, chosen for its component-based development approach and excellent rendering performance.
Responsive Design: Pages are designed with responsive layouts, adapting seamlessly to various screen sizes and resolutions for enhanced user accessibility across devices.
Mainstream Frameworks: Utilizes the React framework, one of the three major frontend frameworks alongside Angular and Vue, known for its efficiency in development and improved user experience.  

Backend:
Technology Stack: Employed the LNMP stack (Linux, Nginx, MySQL, PHP) for the backend infrastructure.
Linux: Selected for its efficiency and security, dominating the server operating system market.
Nginx: Chosen for its lightweight nature and high performance in web environments.
MySQL: Widely adopted due to its robust concurrency handling capabilities.
PHP: A longstanding choice in web development, offering versatility and reliability.
Caching and Search Optimization: Implemented Redis caching and Elasticsearch as a search engine, enhancing system responsiveness. Hot data such as drugs and diseases are stored in Redis and Elasticsearch, prioritizing cache access to improve performance.
Elasticsearch Integration: Utilized for keyword searches in drugs and diseases search functionalities, leveraging its indexing capabilities for enhanced search accuracy.  
Deployment:
Kubernetes: Entire system deployed on Kubernetes for efficient management and scalability.
Ingress Controller: Acts as a load balancer, distributing traffic to pods within the cluster. Kubernetes automatically handles pod failures, ensuring high availability by creating and assigning new pods to nodes with lower loads.
