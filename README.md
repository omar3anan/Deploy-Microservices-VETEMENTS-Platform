<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deployment - VETEMENTS E-Commerce Website</title>
</head>
<body>
    <h1>Deployment - VETEMENTS E-Commerce Website</h1>
    <h2>Customer Service</h2>
    <p>The customer service application is responsible for handling customer inquiries. It is a RESTful API that exposes the following endpoints:</p>
    <ul>
        <li><code>/customers</code>: Get a list of all customers.</li>
        <li><code>/customers/:id</code>: Get a customer by ID.</li>
        <li><code>/customers/create</code>: Create a new customer.</li>
        <li><code>/customers/update</code>: Update an existing customer.</li>
        <li><code>/customers/delete</code>: Delete a customer.</li>
    </ul>
    <p>The customer service application is deployed to AWS Elastic Beanstalk. The environment variables are configured in the <code>.ebextensions</code> directory.</p>
    <h2>Products Service</h2>
    <p>The products service is responsible for managing the products in the e-commerce store. It is a RESTful API that exposes the following endpoints:</p>
    <ul>
        <li><code>/products</code>: Get a list of all products.</li>
        <li><code>/products/:id</code>: Get a product by ID.</li>
        <li><code>/products/create</code>: Create a new product.</li>
        <li><code>/products/update</code>: Update an existing product.</li>
        <li><code>/products/delete</code>: Delete a product.</li>
    </ul>
    <p>The products service is deployed to AWS Elastic Beanstalk. The environment variables are configured in the <code>.ebextensions</code> directory.</p>
    <h2>Shopping API Gateway</h2>
    <p>The shopping API gateway is a reverse proxy that routes requests to the customer service and products services. It is configured to use the following routes:</p>
    <ul>
        <li><code>/customers</code>: Route requests to the customer service <code>/customers</code> endpoint.</li>
        <li><code>/products</code>: Route requests to the products service <code>/products</code> endpoint.</li>
    </ul>
    <p>The shopping API gateway is deployed to AWS API Gateway. The environment variables are configured in the <code>.ebextensions</code> directory.</p>
    <h2>Deployment</h2>
    <p>The e-commerce website can be deployed by running the following commands:</p>
    <code>eb init</code><br>
    <code>eb deploy</code><br>
    <p>This will deploy the customer service, products service, and shopping API gateway to AWS.</p>
    <h2>Troubleshooting</h2>
    <p>If you encounter any problems with the deployment, you can check the logs for the customer service, products service, and shopping API gateway. The logs can be found in the following directories:</p>
    <ul>
        <li><code>~/.elasticbeanstalk/logs/customer-service</code></li>
        <li><code>~/.elasticbeanstalk/logs/products</code></li>
        <li><code>~/.elasticbeanstalk/logs/shopping-api-gateway</code></li>
    </ul>
    <p>You can also view the logs in the AWS Elastic Beanstalk console.</p>
    <h2>Contact Information</h2>
    <p>If you have any questions about the deployment, please contact the following person:</p>
    <p>Name: Omar Anan Abou-Romia</p>
    <p>Email: omarabouromia@gmail.com</p>
</body>
</html>
