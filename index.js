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
    response.json({
        products: [
            {
                id: '1',
                image: 'assets/images/apple-tv.jpg',
                title: 'Apple-tv',
                price: 60000,
                description: 'Apple tv white'
            },
            {
                id: '2',
                image: 'assets/images/homepod-mini.jpg',
                title: 'HomePod',
                price: 40000,
                description: 'HomePod mini black'
            },
            {
                id: '3',
                image: 'assets/images/ipad-mini.jpg',
                title: 'Ipad',
                price: 30000,
                description: 'Ipad mini white'
            },
            {
                id: '4',
                image: 'assets/images/macbook.jpg',
                title: 'Macbook',
                price: 60000,
                description: 'Macbook white'
            }
        ]
    });
})
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});