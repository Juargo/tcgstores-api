# docker-entrypoint.sh for node.js

echo "wait db server"
dockerize -wait tcp://database-stores:3306 -timeout 20s

echo "start node server"
tsc
node dist/index.js
