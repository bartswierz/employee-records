# Polaris

![image](https://github.com/bartswierz/employee-records/assets/100662080/4164178d-e221-4663-b585-adf42f7cf3d9)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Project Overview

MERN stack project built with MongoDB, ExpressJS, React, and NodeJS, SCSS, and Material UI showing CRUD functionality for employees at the current company. My MERN stack application features a captivating space theme that adds an immersive and visually stunning experience for users. The highlight of this theme is an animated star background that gracefully traverses across the screen, creating a sense of movement and depth reminiscent of a space voyage. This project can be used as a useful tool to learn the MERN stack as the logic is easy to follow and can be used as a foundation for your own MERN stack applications.

## Features

<!-- List the key features of your project. Describe each feature briefly and explain how it benefits the users. -->
This project focuses on using CRUD operations 
- Employee Listing: Display a list of all employees with relevant details, such as name, position, level, and salary.
- Employee Update: Edit and update existing employee records with new information. Modify details such as name, designation, department, contact information, and other relevant fields.
- Employee Deletion: Remove employees from MongoDB, permanently deleting their records.
- Data Validation: Validate user input to ensure the integrity and consistency of employee records. Perform checks on required fields, data types, and any custom validation rules.
- Responsive Design: Develop a responsive user interface that adapts to different screen sizes and devices, allowing users to access and manage employee records from desktop and mobile devices. Large viewport devices display a table, whereas small viewport devices display individual row data as a card component.

## Technologies Used
- MongoDB: NoSQL database for storing employee records.
- Express.js: Web application framework for building the server-side RESTful API.
- React.js: JavaScript library for building the user interface components.
- Node.js: JavaScript runtime for executing server-side code.
- Material UI: Material-UI is a popular React UI library that provides pre-built components following the Material Design guidelines. With its rich set of components and seamless integration with React, Material-UI is a powerful tool for creating beautiful and responsive user interfaces in MERN stack applications.
- SCSS: SCSS (Sass) is a popular CSS preprocessor that extends the capabilities of traditional CSS. It helps write cleaner and more organized CSS code, resulting in improved development workflows and easier maintenance of stylesheets.

## Getting Started

To run the application locally, follow the steps below:
1. Create an empty directory and navigate into the folder(i.e. cd polaris-project)
2. Clone the repository using the command: git clone https://github.com/bartswierz/employee-records.git. 
  Your repository should look like this: 

  ![image](https://github.com/bartswierz/employee-records/assets/100662080/31bf8c91-8a6a-4d39-98f8-72643275a4d9)
  
3. Install node packages for the client and server directories by navigating into the client directory & server directory, and use the command "npm install"

    ![image](https://github.com/bartswierz/employee-records/assets/100662080/fd6f6100-0912-4a04-a486-2d48d724e611)

    ![image](https://github.com/bartswierz/employee-records/assets/100662080/d71aa969-5be8-4565-8ca4-44edfd29f8c6)

4. Create a free MongoDB account and create a free-tier server cluster to obtain the Connection String to connect our app to our cluster. Follow this quick 5-minute video of setting up your very own free-tier cluster! This step is a MUST to get the URI for our ".env" file. Video: https://www.youtube.com/watch?v=jXgJyuBeb_o. The Connection string will look like this: 
  mongodb+srv://username:password@cluster.abcdefg.mongodb.net/?retryWrites=true&w=majority
  
5. Create a '.env' file inside our server directory and paste in your connection string to connect our app to our MongoDB cluster:

![image](https://github.com/bartswierz/employee-records/assets/100662080/d2943c0a-daad-4916-a4ee-10787b44d63d)

6. Start up the server and client. 
 - Navigate into the server directory via VSCode Terminal and run the command "npm run dev"
![image](https://github.com/bartswierz/employee-records/assets/100662080/45eb1c31-c7bd-482c-a98a-acaae4d4cc17)

 - Navigate into the client directory via VSCode Terminal and run the command "npm start"
  ![image](https://github.com/bartswierz/employee-records/assets/100662080/1ebffde9-c3d5-4c89-b8f1-c234e09d92a7)

7. Application setup is complete! Create a new employee, and if everything was setup correctly, we will have a successful fetch and POST into our MongoDB Cluster!

![image](https://github.com/bartswierz/employee-records/assets/100662080/82943272-eeeb-4a37-aa32-7c424bde3c21)

## Usage

<!--Explain how to use your project. Provide examples and code snippets to demonstrate its functionality. You can also include screenshots or GIFs to visually showcase your project. -->
##### DISPLAY EMPLOYEE RECORDS IN MONGODB - DESKTOP
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjE4YjhlNDdhNWYwNWYwMTU1OGZhZDJiZWFlMGYyOTc0NzRkNmI1NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l0AfwbmPqxG1hPGlrv/giphy.gif)

##### DISPLAY EMPLOYEE RECORDS IN MONGODB - MOBILE
![](https://media.giphy.com/media/qSeeOTKEb6yQe7BQMV/giphy.gif)

##### EDIT EMPLOYEE RECORD
![](https://media.giphy.com/media/qRODnMUqXGzzGpdZhL/giphy.gif)

##### DELETE EMPLOYEE RECORD
![](https://media.giphy.com/media/KyTae3MIfynCe5Tcmr/giphy.gif)
