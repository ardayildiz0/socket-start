const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
res.write('Hello World!');
res.end();
}
).listen(3000, () => {
  console.log('Server is running on port 3000');
});