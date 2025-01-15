# Use the official Node.js image from the Docker Hub
FROM node:18.20.5-alpine@sha256:a24108da7089c2d293ceaa61fb8969ec10821e8efe25572e5abb10b1841eb70b

# Install the WebP utilities
RUN apk add --no-cache libwebp-tools

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Add a non-root user for security
RUN addgroup appgroup && adduser -S appuser -G appgroup

# Change ownership of the app directory to the new user
RUN chown -R appuser:appgroup /usr/src/app

# Switch to the non-root user
USER appuser

# Copy the rest of the application code
COPY . .

# Set the default command to allow overriding
ENTRYPOINT ["node", "app.js"]
