FROM node:20.5.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g json-server
COPY . .
EXPOSE 5173
EXPOSE 3000
CMD ["sh", "-c", "npm run dev -- --host & json-server --watch eventos.json"]
