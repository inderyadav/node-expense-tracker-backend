# Node base image
FROM node:18

# app folder create
WORKDIR /app

# package copy
COPY package*.json ./

# install dependencies
RUN npm install

# baaki code copy
COPY . .

# port expose
EXPOSE 3000

# start app
CMD ["node", "index.js"]