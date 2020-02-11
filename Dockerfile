FROM node:13
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY ./ ./
RUN npm run build
EXPOSE 3000
# CMD ["node", "./server/server.js"]
CMD ["npm", "start"]

