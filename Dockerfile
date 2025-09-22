FROM node:20

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*


RUN npm install -g typescript ts-node

EXPOSE 3000

CMD ["bash"]
