# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Compile o TypeScript
RUN npm run build

# Defina o comando de execução
CMD ["node", "dist/index.js"]
