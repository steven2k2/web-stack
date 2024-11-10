-- Create the users table if it doesn't already exist, with additional fields
CREATE TABLE IF NOT EXISTS users
(
    id
    SERIAL
    PRIMARY
    KEY,
    name
    VARCHAR
(
    100
) NOT NULL,
    email VARCHAR
(
    100
) UNIQUE NOT NULL,
    phone VARCHAR
(
    15
),
    address VARCHAR
(
    255
),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role VARCHAR
(
    50
)
    );

-- Insert initial data into the users table with anonymized Norwegian data
INSERT INTO users (name, email, phone, address, role)
VALUES ('Ingrid Solberg', 'ingrid.solberg@digitalpathsnorway.no', '+47 912 34 567', 'Wessels gate 181, 7043 Trondheim, Norway', 'Project Manager'),
       ('Lars Nilsen', 'lars.nilsen@digitalpathsnorway.no', '+47 923 45 678', 'Storgata 12, 0155 Oslo, Norway', 'Software Engineer'),
       ('Kari Hansen', 'kari.hansen@digitalpathsnorway.no', '+47 934 56 789', 'Kirkegata 45, 9008 Tromsø, Norway', 'Data Analyst'),
       ('Ola Kristiansen', 'ola.kristiansen@digitalpathsnorway.no', '+47 945 67 890', 'Dronningens gate 23, 7012 Trondheim, Norway', 'UX Designer');