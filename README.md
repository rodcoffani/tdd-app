![Image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.ippon.tech%2Fcontent%2Fimages%2F2018%2F08%2FTDD_Graphic.jpg&f=1&nofb=1)

# TDD-app
This is a project based on a Rocketseat's video about TDD, for the purpose of studying.

## Prerequisites
You will need a database, docker (or Postgres) installed.
 
## First steps
  - Install packages \
      Run `yarn` or `npm i` to install all the dependencies needed.
  - Create .env files \
      Create your .env file based on the `.env.example`. Then, create a .env for the tests named `.env.test` with the following data: __`DB_DIALECT=sqlite`__
  - Initialize the database \
      Run `docker-compose up` to set up the database. After this, run `yarn sequelize db:migrate`.

## Testing
For the tests, you can run `yarn test` or `npm t` to run them all. Or, you can use `jest` and the name of the file you want to test.
      
## Running
To run the project, you can use `yarn start` or `npm start`.
