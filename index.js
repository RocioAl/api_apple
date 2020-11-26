const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/usuario', (request, response) => {
    response.json({ info: 'La API esta en ejecucion' });
});

app.get('/', (request, response) => {


    response.json(

        [{
            id: '1',
            title: 'Apple-tv',
            price: 60000,
            image: '',
            description: 'Apple tv white'
        },
        {
            id: '2',
            title: 'HomePod',
            price: 40000,
            image: '',
            description: 'HomePod mini black'
        },
        {
            id: '3',
            title: 'Ipad',
            price: 30000,
            image: '',
            description: 'Ipad mini white'
        },
        {
            id: '4',
            title: 'Macbook',
            price: 60000,
            image: '',
            description: 'Macbook white'
        }]

    )
});
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});


