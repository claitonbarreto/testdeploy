FROM node:alpine

WORKDIR /usr/testdeploy

COPY ./package.json ./

RUN yarn

COPY ./ ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait

RUN chmod +x /wait

CMD /wait && yarn start