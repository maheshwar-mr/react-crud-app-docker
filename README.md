# CRUD React App

## Set the build argument in `docker-compose.yml`

```yaml
version: '3'
services:

  client:
    build:
      context: ./streams-client
      args:
        - REACT_APP_HOST_IP_ADDRESS={YOUR HOST IP ADDRESS}
    ports:
      - "3000:80"

  server:
    build: ./streams-server
    volumes:
      - json-data:/usr/src/app/
    ports:
      - "3001:3001"

volumes:
  json-data:
    driver: local
```

Set the argument `REACT_APP_HOST_ID_ADDRESS` to the host ip so that the client can reach the json-server

## Starting the docker containers

Run the following command to start up the containers

```bash
docker-compose up --build -d
```

This will start up the client and server containers on 3000 and 3001 host ports respectively
