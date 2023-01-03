const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  crated_at TIMESTAMP DEAFULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEAFULT CURRENT_TIMESTAMP
)
`;

module.exports = createUsers;