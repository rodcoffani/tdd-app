# TDD-app
This is a project based on a Rocketseat's video about TDD, for the purpose of studying.

## Prerequisites
You will need a database, docker (or Postgres) installed
 
## First steps
  - Install packages \
      Run `yarn` or `npm i` to install all the dependencies needed.
  - Initialize the database \
      Run `docker-compose up` to set up the database. After this, run `yarn sequelize db:migrate`.
      
## Running
To run the project, use the command `yarn start` or `npm start`.

## Testing
For the tests, you can run `yarn test` or `npm t` to run them all. Or, you can use `jest` and the name of the file you want to test.
