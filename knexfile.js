// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "testerdb",
      user: 'postgres',
      password: 'pumapuma20'
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/<examples_test>",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations"
    },
    useNullAsDefault: true
  }
};