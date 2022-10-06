FROM node:18-alpine

ADD ./tinyurl /home/www/tinyurl
WORKDIR /home/www/tinyurl
RUN npm install
RUN npm run build

CMD ["npm", "run", "dev", "--", "-p", "8000"]