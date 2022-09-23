module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "13.41.219.189"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "immedi8_website_db"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "password123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
