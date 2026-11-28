FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

# Vite vigila los archivos y aplica HMR; el polling funciona también con volúmenes Docker.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
