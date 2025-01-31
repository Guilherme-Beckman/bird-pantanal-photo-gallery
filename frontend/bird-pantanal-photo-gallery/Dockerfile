# Etapa 1: Build da aplicação
FROM node:20 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine
COPY --from=build-stage /app/dist/bird-pantanal-photo-gallery /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

