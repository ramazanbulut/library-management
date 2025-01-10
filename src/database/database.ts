import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './library.db',
});

const initializeDatabase = async () => {
    try {
        const ddlPath = path.join(__dirname, 'schema.sql');
        const ddl = fs.readFileSync(ddlPath, 'utf8');

        // Split statements and execute them one by one
        const statements = ddl.split(';').filter(stmt => stmt.trim());
        for (const statement of statements) {
            await sequelize.query(statement + ';');
        }

        console.log('Database initialized');
        return true;
    } catch (error) {
        console.error('Database initialization failed:', error);
        return false;
    }
};

export { sequelize as default, initializeDatabase };
