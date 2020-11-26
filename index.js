const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())


app.get('/con-cors', cors(), (req, res, next) => {
    res.json({ msg: 'con cors 🔝 🎉' })
})
app.get('/usuario', (request, response) => {
    response.json({ info: 'La API esta en ejecucion' });
});

app.get('/products', (request, response) => {


    response.json(

        [{
            id: '1',
            title: 'Apple-tv',
            price: 60000,
            image: 'assets/images/apple-tv.jpg',
            description: 'Rosa Apple-tv piel'
        },
        {
            id: '2',
            title: 'Iphone',
            price: 40000,
            image: 'assets/images/iphone.jpg',
            description: ' Iphonr Plus, 32 GB, oro rosa'
        },
        {
            id: '3',
            title: 'Homepod Mini',
            price: 30000,
            image: 'assets/images/homepod-mini.jpg',
            description: 'Apple HomePod Speakers white'
        },
        {
            id: '4',
            title: 'Ipad ',
            price: 40000,
            image: 'assets/images/ipad-mini.jpg',
            description: 'Ipad Mini'
        },
        {
            id: '5',
            title: 'Macbook',
            price: 60000,
            image: 'assets/images/macbook.png',
            description: 'Macbook'
        }]

    )
});
app.get('/products/1', (request, response) => {


    response.json(

        {
            id: '1',
            image: 'assets/images/apple-tv.jpg',
            title: 'Apple-tv',
            price: 60000,
            description: 'Rosa Apple-tv piel'
        }

    )
});
app.get('/products/2', (request, response) => {


    response.json(

        {
            id: '2',
            image: 'assets/images/iphone.jpg',
            title: 'Iphone',
            price: 40000,
            description: ' Iphonr Plus, 32 GB, oro rosa'
        }

    )
});
app.get('/products/3', (request, response) => {


    response.json(

        {
            id: '3',
            image: 'assets/images/homepod-mini.jpg',
            title: 'Homepod Mini',
            price: 30000,
            description: 'Apple HomePod Speakers white'
        }

    )
});
app.get('/products/4', (request, response) => {


    response.json(

        {
            id: '4',
            image: 'assets/images/ipad-mini.jpg',
            title: 'Ipad ',
            price: 40000,
            description: 'Ipad Mini'
        }

    )
});
app.get('/products/5', (request, response) => {


    response.json(

        {
            id: '5',
            image: 'assets/images/macbook.png',
            title: 'Macbook',
            price: 60000,
            description: 'Macbook'
        }

    )
});
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});
// no es necesario insertar carpeta assets
