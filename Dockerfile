FROM node:12.16.1-alpine

WORKDIR /usr/local/app

COPY index.js /usr/local/app

EXPOSE 8000

ENTRYPOINT ["node", "/usr/local/app/index.js"]