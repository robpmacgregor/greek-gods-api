FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*
 
COPY package.json package-lock.json ./

RUN npm install
USER node

EXPOSE 3000
EXPOSE 9229

CMD ["npm", "run", "dev"]
