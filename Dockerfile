FROM node:12.18.1

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

#CMD ["npm", "start"]
EXPOSE 3000
CMD ["npm", "run", "start"]