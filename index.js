const express = require('express');
const {connectWithRetry} = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static('node_modules'));

// Connect to the database before starting the server
connectWithRetry(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to PostgreSQL Stack</title>
            <link href="/static/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container mt-5">
                <h1 class="mb-4">Welcome to the PostgreSQL Stack App</h1>
                <p>This is a basic Express application with PostgreSQL and Bootstrap integration.</p>
                <div class="mt-4">
                    <a href="/users" class="btn btn-primary">View Users</a>
                </div>
            </div>
            <script src="/static/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `);
});

app.get('/users', async (req, res) => {
    try {
        const client = require('./database').client;
        const result = await client.query('SELECT * FROM users');
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>PostgreSQL Stack</title>
                <link href="/static/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                <div class="container mt-5">
                    <h1 class="mb-4">PostgreSQL Stack - users table</h1>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Created</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${result.rows.map(user => `
                                <tr>
                                    <td>${user.id}</td>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                    <td>${user.phone || '-'}</td>
                                    <td>${user.address || '-'}</td>
                                    <td>${user.created_at ? new Date(user.created_at).toLocaleString() : '-'}</td>
                                    <td>${user.role || '-'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <!-- Bootstrap JS Bundle from local installation -->
                <script src="/static/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).send('An error occurred while fetching users.');
    }
});

module.exports = app;