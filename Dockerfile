FROM node:20


WORKDIR /usr/src/app


RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install


EXPOSE 3000

# Start the Node.js application
CMD ["node", "dist/index.js"]
