# E-commerce_website_backend
This project is created using VS CODE(Node.js), MONGODB ATLAS & POSTMAN. It consists of all APIs required for a basic E-commerce shop/website.  

# Download links
VS CODE: https://code.visualstudio.com/Download
MONGODB ATLAS: https://www.mongodb.com/atlas
POSTMAN: https://www.postman.com/

# API_definition
API stands for Application Programming Interface which'll bring the data from database to user interface.

# HTTP_requests
Basically, the project will be using four HTTP requests: GET, POST, PUT & DELETE.
1. GET: Used to get data. For ex: getting all products or getting all orders etc
2. POST: Used to post the data into the database by creating it
3. PUT: Used to update the data 
4. DELETE: Used to delete the data

# Collections used in database: 
1. Products: id, name, description, richDescription, image, images, brand, phone, category, countInStock, rating, isFeatured, dateCreated
2. Orders: id, orderItems, shippingAddress1, shippingAddress2, city, zip, country, phone, status, totalPrice, user, dateOrdered
3. Category: id, name, color, icon, image
4. Users: is, name, email, passwordHash, street, apartment, city, zip, country, phone, isAdmin
5. orderItems: id, product, quantity

