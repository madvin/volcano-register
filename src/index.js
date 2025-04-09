import express from 'express';
import routes from './routes,js';

const app = express();

const port = 3000;

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);



app.get('/', (req, res) => {
    res.send('It works')
});


app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))