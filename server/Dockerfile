FROM node:13.6.0
COPY . /var/lib/server/
WORKDIR /var/lib/server
RUN npm install
EXPOSE 4000
CMD [ "npm", "start"]