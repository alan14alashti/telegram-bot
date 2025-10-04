# Use official Node.js 20 image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy rest of code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
