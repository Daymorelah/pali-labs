FROM node:8.15.1-jessie
WORKDIR /src
COPY package.json /src
RUN yarn install
COPY . /src
EXPOSE 2323
CMD ["yarn", "start"]
