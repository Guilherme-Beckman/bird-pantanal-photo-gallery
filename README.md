<p align="center">
        <img src="https://raw.githubusercontent.com/Guilherme-Beckman/bird-pantanal-photo-gallery/main/frontend/bird-pantanal-photo-gallery/public/favicon.ico" />
        <h1 align="center">Bird Pantanal Photo Gallery</h1>
</p>

<p align="center">
        <a aria-label="Portfólio - Guilherme Beckman" href="https://github.com/Guilherme-Beckman"><img src="https://img.shields.io/badge/Portf%C3%B3lio-Guilherme%20Beckman-931ad9" /></a> 
</p>

## :bulb: Sobre o Projeto

**Bird Pantanal Photo Gallery** Bird Pantanal Photo Gallery é uma galeria digital dedicada às aves do Pantanal, apresentando artigos detalhados sobre cada espécie. A aplicação permite explorar diversas aves com descrições informativas, proporcionando um espaço para a apreciação da fauna local.
**Implantação:** [Link para o projeto funcionando](https://passarosdopantanal.com.br/)

## :wrench: Tecnologias

### Back-end

- Java (linguagem selecionada)
- Spring Boot 
- ORM 
- PostgreSQL (banco de dados)
- JWT (autenticação e autorização)
- Docker (conteinerização)
- Docker Compose (lida com vários contêineres)
- Spring Cache
- Spring Security
- RFC (exceções)
- CORS

### Front-end

- Angular 19
- TypeScript
- SCSS

### Implantação
- AWS
- AWS S3
- EC2
- Application Load Balancer
- Route 53
- RDS
- Nginx

## :scroll: Funcionalidades

Aqui estão descritas todas as funcionalidades da API:

### API (Back-end)

- [x] Listar todos os pássaros;
- [x] Listar os dados específicos de um pássaro;
- [x] Criar novos pássaros;
- [x] Atualizar dados de um pássaro;
- [x] Deletar pássaros;
- [x] Criar usuários;
- [x] Fazer login gerando um token JWT para autenticação e autorização;
- [x] Proteger rotas específicas para acesso apenas com um token JWT válido;

## :book: Planejamento

### Diagramas

Aqui está o diagrama de fluxo de dados da aplicação:
  <img src="https://raw.githubusercontent.com/Guilherme-Beckman/bird-pantanal-photo-gallery/main/fluxogram.png" />

  ## :floppy_disk: Instalação
  
Primeiramente, deve-se clonar o repositório na sua máquina local com o seguinte comando:

```
git clone https://github.com/Guilherme-Beckman/bird-pantanal-photo-gallery.git
```
### Back-end

- Um editor de código com suporte a Java, como: Spring Tool Suite (STS), VS Code (com a extensão Java) ou IntelliJ IDEA;
- Ter o Java JDK 17 ou superior instalado e adicionado ao PATH do sistema;
- O gerenciador de banco de dados PostgreSQL 16 instalado e configurado através do instalador oficial ou de uma imagem Docker;
- Ter o Git instalado.



### Front-end 

## Requisitos

- Um editor de código com suporte a JavaScript/TypeScript, como:
  - [VS Code](https://code.visualstudio.com/) (minha opção)
  - [WebStorm](https://www.jetbrains.com/webstorm/)
  - [Sublime Text](https://www.sublimetext.com/)
- Ter o [Node.js](https://nodejs.org/) instalado e adicionado ao PATH do sistema.
- Ter o [Angular CLI](https://angular.io/cli) instalado globalmente. Caso não tenha, instale com o comando:

  ```bash
  npm install -g @angular/cli
