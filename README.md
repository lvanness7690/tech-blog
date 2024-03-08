# The Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents\
* [Description](#description)
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Live Application](#live-application)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [License](#license)

## Description

The Tech Blog is a Content Management System (CMS)-style blog site designed for tech enthusiasts to create, view, and interact with blog posts. Built using Node.js, Express.js, Sequelize, and Handlebars.js, this application provides a user-friendly interface for managing blog posts, user authentication, and commenting functionality.

## Installation

To install The Tech Blog, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install all the necessary dependencies.
3. Set up your MySQL database and ensure it is running.
4. Create a `.env` file in the root directory and fill in your session secret and MySQL database credentials.
5. Run `npm run seed` to seed your database with initial data.
6. Run `npm start` to start the application.

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MySQL, Sequelize (ORM), and Handlebars (template engine). It utilizes the node package manager (npm) dependencies sequelize (v6.31.1), mysql2 (v3.3.0), express (v4.18.2), dotenv (v16.0.3), nodemon (v2.0.22), bcrypt (v.5.1.0), bootstrap (v5.2.3), connect-session-sequelize(v.7.1.6), express-handlebars (v7.0.7), and express-session (v1.17.3). Jest (v.29.5.0) is installed for future unit testing. Also, the Insomnia application was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Live Application

[The Tech Blog](https://stormy-bastion-41204-8176816fd2c1.herokuapp.com)

## Usage

Upon starting the application, users can:

- View existing blog posts on the homepage
- Sign up or sign in to create, view, update, or delete blog posts
- Leave comments on existing blog posts
- Access their dashboard to manage their blog posts

## Features

- User authentication system for sign-up, sign-in, and log-out functionality
- Homepage displaying existing blog posts with navigation links
- Dashboard for authenticated users to manage their blog posts
- Ability to create, update, and delete blog posts
- Commenting functionality on blog posts
- Session timeout feature for user security

## Credits

Developed by Leighton Van Ness

## License

Please refer to the license in the repo.


