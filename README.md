# rmd-server

Run node server as a docker container with a volume specified. This allows nodemon-like behavior for development.
docker run -p 3000:8080 --name reminder-node-server-container --volume ${PWD}:/usr/src/app reminder-node-server