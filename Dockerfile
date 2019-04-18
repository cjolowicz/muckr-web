FROM node:8.15-alpine as base
WORKDIR /usr/local/src/muckr-web
COPY package.json .
COPY yarn.lock .

FROM base as builder

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM base

ENV NODE_ENV production
RUN yarn install --frozen-lockfile
COPY --from=builder /usr/local/src/muckr-web/lib lib
COPY --from=builder /usr/local/src/muckr-web/dist dist

CMD ["node", "lib/server"]
