FROM node:10.13.0 as build-env

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_API_URL=http://localhost:3000

RUN npm run build

FROM nginx:1.15

COPY --from=build-env /build/ /usr/share/nginx/html/
