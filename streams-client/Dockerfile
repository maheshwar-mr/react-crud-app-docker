FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

ARG REACT_APP_HOST_IP_ADDRESS

ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS

COPY . .

RUN npm run --silent build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
