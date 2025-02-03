# Etapa 1: Construção
FROM node:latest AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

# Instala as dependências
RUN npm install

# Faz o build da aplicação Angular
RUN npm run build --prod

# Etapa 2: Servir a aplicação com um servidor web leve
FROM nginx:alpine

# Copia os arquivos build para o diretório padrão do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta em que o Nginx estará rodando
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]

