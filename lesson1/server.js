const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is the title</title></head>");
    res.write(`
      <body>
          <h1>Hello from the home page</h1>
          <form method="POST" action='/create-user'>
            <input type="text" name="username" />
            <button type='submit' />Submit </button>
      </body>`);
    res.write("</html>");
    res.end();
  }

  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(`
      <body>
          <h1>List of Users</h1>
          <ul>
            <li>User 1</li>
            <li>User 2</l1>
          </ul>
      </body>`);
    res.write("</html>");
    res.end();
  }
  if (req.url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);
