const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (request, response) => {
    response.json({ info: 'La API esta en ejecucion' });
});

app.get('/usuario', (request, response) => {
    response.json(

        [{
            id: '1',
            image: '',
            title: 'Apple-tv',
            price: 60000,
            description: 'Apple tv white'
        },
        {
            id: '2',
            image: '',
            title: 'HomePod',
            price: 40000,
            description: 'HomePod mini black'
        },
        {
            id: '3',
            image: '',
            title: 'Ipad',
            price: 30000,
            description: 'Ipad mini white'
        },
        {
            id: '4',
            image: '',
            title: 'Macbook',
            price: 60000,
            description: 'Macbook white'
        }]

    )
});
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});


