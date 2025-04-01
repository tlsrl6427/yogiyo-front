FROM node:18
WORKDIR /yogiyo-front-user

COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]
EXPOSE 3000
