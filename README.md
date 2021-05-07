# tagbox task
> A simple Node.js express app.

`node version : 16.0.0`
`npm version : 7.10.0`

## Installation

Run routine install dependencies and start command as follows to start the service

```sh
npm install 
npm run start
```

## Development details

1. Used JWT token for authentication
2. Dev dependencies - nodemon
3. IDE - VScode
4. All values have been mostly hardcoded
5. Used sequelize for ORM

## Project Structure

* /models
    * consists of user and transaction class files
* /routes
    * consists of routes categorized into different files  
* /middleware
    * auth.js for authentication functions
    * dbconnect.js uses sequelize to connect to postgres and models have been defined as well
* app.js
    * Entry point for the application

#Scope
1. ~~Using [logger] with [INFO], [DEBUG], [ERROR] modes~~
2. Use properties/json file to fetch values like APIKeys,urls,etc

<!-- Markdown link & img dfn's -->
[logger]: https://www.npmjs.com/package/log4js
