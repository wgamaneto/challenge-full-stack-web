# Inicializar projeto

## cd frontend

```
- npm install
- npm run serve
```

## cd backend

```
- npm install
- npm start (preferencial port:3001)
```

# Backend(config)

## Config.js:

```
module.exports = {
development: {
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
host: process.env.DB_HOST,
port: process.env.DB_PORT,
dialect: process.env.DB_DIALECT,
},
test: {
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
host: process.env.DB_HOST,
port: process.env.DB_PORT,
dialect: process.env.DB_DIALECT,
},
production: {
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
host: process.env.DB_HOST,
port: process.env.DB_PORT,
dialect: process.env.DB_DIALECT,
},
};
```

## dotenv:

```
DB_USERNAME=newuser
DB_PASSWORD=newpassword
DB_DATABASE=database_development
DB_HOST=127.0.0.1
DB_PORT=5433
DB_DIALECT=postgres
```
