<<<<<<< HEAD
FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
=======
FROM node:13

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "./server/server.js"]
>>>>>>> 70dae9fe516e0532733411efb391693f36add3cd
