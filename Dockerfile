# Use latest version of 8-stretch LTS
FROM node:8-stretch

# Change working directory
WORKDIR /home/node/jelenaio

# Copy source code
COPY . .

# Install dependencies if necessary
RUN npm install && chown -R node:node .

# Expose API port to the outside
EXPOSE 8080

# Launch application
CMD ["node","server.js"]
