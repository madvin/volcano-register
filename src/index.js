import express from 'express';
import routes from './routes.js';

import handlebars from 'express-handlebars';


const app = express();
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));


app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))