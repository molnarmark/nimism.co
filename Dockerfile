FROM node:6.9

RUN mkdir -p /src/app
WORKDIR /src/app

ENV CI=true

COPY package.json /src/app/
RUN npm install && \
    npm install -g serve

COPY . /src/app

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start:prod" ]