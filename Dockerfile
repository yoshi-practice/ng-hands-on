FROM node:10.8.0-stretch

RUN npm install -g @angular/cli && \
    ng config -g cli.packageManager yarn
WORKDIR /app/
