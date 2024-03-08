const express = require ('express');

const app = express();
const port =process.env.PORT || 3000;

app.get("/", (req, res) => {
    const htmlResponse = `
    <html>
        <head>
            <title> Back en Vercel</title>
        </head>
        <body>
            <h1>Proyect Back in Vercel</h1>
        </body>
    </html>
    `;
    res.send(htmlResponse);
//
//
            
});

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});


