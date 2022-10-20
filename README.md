# Ag-Software test task First run 👟

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
  - [General prerequisites](#general_prerequisites)
  - [Create MySQL Database](#create_mysql_prerequisites)
  - [Install all dependencies](#install_all_dependencies)
  - [Create tables in Database](#create_table_in_database)
  - [Add default values to table](#add_default_values)
  - [Start app](#start_app)
- [Usage](#usage)
  - [Postman](#postman)
  - [File Structure](#file_structure)
    - [Server](#server)
    - [Client](#client)
- [Extra](#extra)

## About <a id="about"></a>
This repository contains the code of monolith application written in Express, MySQL, React

## Getting started <a id="getting_started"></a>

### General prerequisites <a id="general_prerequisites"></a>
1. Install `nvm`([macOS/Linux](https://github.com/nvm-sh/nvm), [Windows](https://github.com/coreybutler/nvm-windows)).
2. **WARN: please, use lts version of node 16**. Install lts node version. Run: 
```shell
nvm install lts
```
3. Use it by running: 
```shell
nvm use lts
```
4. Install `mysql`(macOS/Linux Run `brew install mysql` in console, [Windows](https://dev.mysql.com/downloads/installer/))

### Create MySQL Database <a id="create_mysql_prerequisites"></a>

#### MacOS/Linux
1. Start the MySQL server by running:
```shell
brew services start mysql
```
2. Add secure the MySQL server by running:
```shell
mysql_secure_installation
```
Press `Y` then `0` and repeat two times password `root`

3. Connect to the server using the command:
```shell
mysql -u root -p
```
Press your entered password from previous step

4. Create Database by running:
```sql
CREATE DATABASE node_app;
```

### Install all dependencies <a id="install_all_dependencies"></a>
1. Open project
2. Install packages in current, server and client folders using the command:
```shell
npm i
```
3. Install sequelize-cli using the command: 
```shell
sudo npm install -g sequelize-cli
```

### Create tables in Database <a id="create_table_in_database"></a>
Open server folder and run:
```shell
npm run migrate
```

### Add default values to table <a id="add_default_values"></a>
1. Connect to the server using the command:
```shell
mysql -u root -p
```
2. Open `server/sql/node-roles.sql` folder and sql query in command line
3. Open `server/sql/node-permissions.sql` folder and sql query in command line
4. Open `server/sql/node-permissions-roles.sql` folder and sql query in command line

### Start app <a id="start_app"></a>
Open `server` and `client` folder and run:
```shell
npm run start
```
**NOTE**:

Congratulations, you have launched the app. 🎉🎉🎉

## Usage <a id="usage"></a>

### Postman <a id="postman"></a>
You can copy the api scheme for the postman from the `server/postman` folder. In tab environment add two variables `host` and `token`. By default `host` equal http://localhost:5500/api/v1/. Copy token from signin response

### File structure <a id="file_structure"></a>

#### Server <a id="server"></a>
- Main file it is `app.js`

- If you want change PORT open `bin/www` and refactor const `port`
```
📦bin
 ┗ 📜www
```


- All models for MySQL includes in `server/models` and `server/migrations`
```
📦models
 ┣ 📜index.js
 ┣ 📜permission.js
 ┣ 📜posts.js
 ┣ 📜role.js
 ┣ 📜rolepermission.js
 ┗ 📜user.js

 📦migrations
 ┣ 📜20221017132950-create-user.js
 ┣ 📜20221017133003-create-role.js
 ┣ 📜20221017133010-create-permission.js
 ┣ 📜20221017133021-create-role-permission.js
 ┗ 📜20221017133241-create-posts.js
```

- All logics include in `server/routes`
```
📦routes
 ┣ 📜auth.js
 ┣ 📜index.js
 ┣ 📜permissions.js
 ┣ 📜posts.js
 ┣ 📜roles.js
 ┗ 📜users.js
```

- Middleware for check permissions exist in `server/utils`
```
📦utils
 ┗ 📜helper.js
```

#### Client <a id="client"></a>
All components exist in `client/src/components`
```
📦components
 ┣ 📂BlogItem
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂BlogList
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂Chip
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂EmptyList
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂Navigation
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂PreviewTitle
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┗ 📂SearchBar
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
```
All pages exist in `client/src/page`
```
📦pages
 ┣ 📂Blog
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂Home
 ┃ ┗ 📜index.jsx
 ┣ 📂Login
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┣ 📂PostCreator
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
 ┗ 📂Register
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.css
```

## Extra <a id="extra"></a>
If this documentation helped you, add a star to this repository ⭐ ⭐ ⭐ . A trifle and I'm pleased. Thanks for reading and taking the time :)