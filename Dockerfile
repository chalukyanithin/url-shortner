# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files (except those in .dockerignore)
COPY . .

# Expose the port used by your app
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
