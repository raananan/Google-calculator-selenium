FROM node:9-slim
WORKDIR /index
COPY package.json/indexRUN npm install
CMD ["npm","start"]
