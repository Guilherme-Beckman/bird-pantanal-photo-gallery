FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --configuration production  # Ou --prod para versões mais antigas

FROM nginx:alpine
COPY --from=builder /app/dist/bird-pantanal-photo-gallery/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
