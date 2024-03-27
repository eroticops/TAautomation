FROM node
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "node","app.js" ]
