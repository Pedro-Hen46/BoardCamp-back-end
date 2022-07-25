import pgk from 'pg';

const { Pool } = pgk;

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'boardcamp',
});

export default connection;