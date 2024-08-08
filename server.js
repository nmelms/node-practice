const http = require("http");
const fs = require("fs");

const rqListener = (req, res) => {};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is the title</title></head>");
    res.write(`
      <body>
        <form action="/message" method="POST" name="message">
          <input name="message" type="text">
          <button type='submit'>Submit</button>
        </form>
      </body>`);
    res.write("</html>");
    return res.end();
  } else if (url === "/test") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is the title</title></head>");
    res.write("<body><h1>thisis the test page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.writeHead(302, { Location: "/" });
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is the title</title></head>");
    res.write("<body><h1>this page does not exits</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
