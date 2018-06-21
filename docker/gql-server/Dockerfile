FROM node:alpine

WORKDIR /var

CMD sh -c "/var/node_modules/.bin/sequelize db:migrate --env development && /var/node_modules/.bin/sequelize db:seed:all && node /var/src/index.js"
