import express from 'express';
import handlebars from 'express-handlebars';



const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.send('It works')
});


app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))