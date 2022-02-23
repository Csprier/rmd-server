# base imagine
FROM node:16-alpine
# Create app directory, this is location inside your container
WORKDIR /usr/src/app
# Install app dependencies
# * is used to copy both package and package-lock.json files
# doing this first takes advantage of docker layers
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]