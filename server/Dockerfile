FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY index.js .
EXPOSE 4000
CMD ["node", "index.js"]

