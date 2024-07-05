#!/bin/bash

# Variables
USER=$(whoami)
GROUP=$(id -gn)

# Create directory with correct permissions
sudo mkdir -p /var/www/symmetrical-succotash
sudo chown -R $USER:$GROUP /var/www/symmetrical-succotash

# Change to the directory and install dependencies
cd /var/www/symmetrical-succotash
npm install
# Restart the application
npm run test
