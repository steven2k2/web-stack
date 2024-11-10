# Use the official Node.js image as the base
FROM node:18

# Optional: Install PostgreSQL client for maintenance or debugging
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Set environment variables for PostgreSQL (used by the application)
ENV PGUSER=appuser
ENV PGPASSWORD=app_password
ENV PGDATABASE=appdb
ENV PGHOST=postgres
ENV PGPORT=5432

# Create application directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]