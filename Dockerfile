# Use official Node.js LTS image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
