#!/bin/bash

# Stop any running containers
echo "Stopping any running containers..."
docker-compose down -v  # Stop and remove all containers and volumes

# Rebuild and start the containers
echo "Rebuilding and starting containers..."
docker-compose up --build