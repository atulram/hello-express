
# Express Hello World App

This is a simple Express app that demonstrates how to create a "Hello World" endpoint, as well as a few other basic endpoints. The image is hosted docker-hub. This app is designed to be used as a basic express deployment in your cluster so that you can test the network settings in your cluster


-  `curl http://localhost:3000/` - should display "Hello World!"

-  `curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' http://localhost:3000/data` - should respond with "Received POST request" when a POST request is made with a JSON payload

-  `curl http://localhost:3000/ping` - should respond with "Pong!" when a GET request is made

-  `curl http://localhost:3000/health` - should respond with "Server is healthy" and a 200 status code when a GET request is made

### Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Before submitting a pull request, please ensure that your changes follow the existing code style and that they are thoroughly tested.

