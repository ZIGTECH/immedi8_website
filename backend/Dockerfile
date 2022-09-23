FROM strapi/base:latest
# FROM node:16

WORKDIR /api

COPY package.json .
COPY yarn.lock .


# Install dependencies, but not generate a yarn.lock lockfile and fail if an update is needed.
RUN yarn install --frozen-lockfile --ignore-engines
# RUN yarn install --ignore-engines 

# In order to launch our Strapi app, we must import it into our image.
# We use the keyword ‘COPY’ to do that.
COPY . .

RUN yarn build

# Run on port 1337
EXPOSE 1337

# We use the keyword ‘CMD’ to do that.
CMD ["yarn", "develop"]