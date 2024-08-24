# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Build your app
RUN npm run build

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define environment variable
ENV NODE_ENV production

# Run the app when the container launches
CMD ["node", "dist/main"]
