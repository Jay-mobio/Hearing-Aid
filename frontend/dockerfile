FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

ENV CHOKIDAR_USEPOLLING=true

CMD [ "npm", "run", "dev" ]