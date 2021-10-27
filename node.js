const http = require('http');  //read eval print loop

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div class="container">
          <p>this is date and time in JS <span id="time"></span></p>
      </div>
      <script>
          let nowdate = new Date();
          console.log(nowdate);
  
  
          let day = nowdate.getDate();
          console.log(day);
  
          console.log(Date.now());
  
          function updatetime(){
              time.innerHTML = new Date();
              console.log(time)
          }
  
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});