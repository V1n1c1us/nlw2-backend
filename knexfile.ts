import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection : {
        filename: path.resolve(__dirname, 'src', 'shared', 'sqlite', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'shared', 'sqlite', 'migrations')
    },
    useNullAsDefault: true,
};