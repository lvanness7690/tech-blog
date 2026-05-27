# Tech Blog

![Status](https://img.shields.io/badge/Status-Local%20database%20app-000000?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-MVC-000000?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-MySQL-000000?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-CMS%20Blog-000000?style=for-the-badge)

CMS-style blog platform with authentication, posts, comments, and dashboard workflows.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Links](#links)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [License](#license)

## Overview

A Node/Express MVC application that uses Handlebars and Sequelize to support user accounts, blog publishing, commenting, and authenticated dashboard management.

## Features

- 👤 User signup, login, and logout
- 🧾 Create, edit, and delete blog posts
- 💬 Comment on existing posts
- 📊 Authenticated dashboard workflow
- 🧱 MVC architecture with Handlebars views

## Tech Stack

- JavaScript
- Node.js
- Express
- Handlebars
- MySQL
- Sequelize
- express-session
- bcrypt

## Links

- Repository: [https://github.com/lvanness7690/tech-blog](https://github.com/lvanness7690/tech-blog)
- Live application: Not currently deployed. This repository is intended to run locally or serve as a code sample.

## Getting Started

1. `npm install`
2. `Create a MySQL database using db/schema.sql`
3. `Create a .env file with database credentials and session secret`
4. `npm run seed`
5. `npm start`

Common scripts:

- `npm run test`
- `npm run start`
- `npm run seed`
- `npm run watch`

## Usage

Run locally, sign up or log in, then manage blog posts through the dashboard.

## Project Structure

- `LICENSE.txt`
- `README.md`
- `config`
- `controllers`
- `db`
- `models`
- `package-lock.json`
- `package.json`
- `public`
- `seeds`
- `server.js`
- `utils`

## Credits

Developed and maintained by Leighton Van Ness.

## License

This project is licensed under the MIT license. See the license file in the repository for details.
