# Deployment-VETEMENTS-E-Commerce-website
Customer Service
The customer service application is responsible for handling customer inquiries. It is a RESTful API that exposes the following endpoints:

/customers: Get a list of all customers.
/customers/<id>: Get a customer by ID.
/customers/create: Create a new customer.
/customers/update: Update an existing customer.
/customers/delete: Delete a customer.
The customer service application is deployed to AWS Elastic Beanstalk. The environment variables are configured in the .ebextensions directory.

Products Service
The products service is responsible for managing the products in the e-commerce store. It is a RESTful API that exposes the following endpoints:

/products: Get a list of all products.
/products/<id>: Get a product by ID.
/products/create: Create a new product.
/products/update: Update an existing product.
/products/delete: Delete a product.
The products service is deployed to AWS Elastic Beanstalk. The environment variables are configured in the .ebextensions directory.

Shopping API Gateway
The shopping API gateway is a reverse proxy that routes requests to the customer service and products services. It is configured to use the following routes:

/customers: Route requests to the customer service /customers endpoint.
/products: Route requests to the products service /products endpoint.
The shopping API gateway is deployed to AWS API Gateway. The environment variables are configured in the .ebextensions directory.

Deployment
The e-commerce website can be deployed by running the following commands:

eb init
eb deploy
This will deploy the customer service, products service, and shopping API gateway to AWS.

Troubleshooting
If you encounter any problems with the deployment, you can check the logs for the customer service, products service, and shopping API gateway. The logs can be found in the following directories:

~/.elasticbeanstalk/logs/customer-service
~/.elasticbeanstalk/logs/products
~/.elasticbeanstalk/logs/shopping-api-gateway
You can also view the logs in the AWS Elastic Beanstalk console.

Contact Information
If you have any questions about the deployment, please contact the following person:

Name: [Omar Anan Abou-Romia]
Email: [omarabouromia@gmail.com]
