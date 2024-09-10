# Usar a imagem base do Node.js
FROM node:lts-alpine

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Copiar apenas os arquivos importantes para o projeto
COPY prisma ./prisma
COPY src ./src
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Instalar as dependências
RUN npm install --quiet --no-optional --no-fund --loglevel=error --force

# Compilar a aplicação NestJS
RUN npm run build

# Gerar o cliente Prisma
RUN npx prisma generate

# Expor a porta que a aplicação irá usar
EXPOSE 3000

# Definir o comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]