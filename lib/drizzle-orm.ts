import { Database } from 'drizzle-orm';

// Replace with your actual database connection details
const database = new Database({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nextjs_app',
});

export default database;