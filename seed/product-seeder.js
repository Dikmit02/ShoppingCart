var Product = require('../models/product');
var mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopping-cart-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

var products = [
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8d4QtgdYXZU3af224eIREbBvHN8Sc9eMunY6msK8MFoqEXytWtytU4ij3t1Q2Afs4CVqkU6w&usqp=CAc',
        title: 'Samsung Phone',
        description: 'Awesome Mobile!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://eu.blizzard.com/static/_images/games/wow/wallpapers/wall2/wall2-1440x900.jpg',
        title: 'Video Game',
        description: 'Also awesome? But of course it was better in vanilla ...',
        price: 20
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,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',
        title: 'Bag',
        description: 'Pack your backs',
        price: 40
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,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ucoqCLO9jS5rA5wBe7sMBIBe7uG/yVVonWZ8GTg2FT1szaenZnldrbcGi9i9591ouNfzJCyNpsKZR1D6dkvXdWGtkflyt6y3ttYOLWmwvzvyXV9hscwugjljilYIhcPnc4Cepc0AyTWGrYW3DWWGrnGw0ueT7T4v9MqZZgLRmzIWBuXJG3SNjWC9t5NubioItq9bNDLJJNwhgkPnM0wNH+K534F9E9HeFGloIWOFnvHWPHEGTWx7wMo8ly3o42SM8rYni8cTxLVngZACIqS+4llyXd73jku7AJKY7qoiKqRERAREQEREBERAVMqqiC26JY1TSZgs1EGs1GFlYUtC4LciFbfC08FOo57iLXNaQW5m/CRmB8iud49g30h1+oY0DQZGBh8y2113epoWO4LAkwuMe6pHCKXZB4OgcPxH+a2XCtlpm2IBHyv5rppga3c0eisvnsp1NEZhNNLELFtxaxB1BBFiCDvFlzbpA2ZdRnrY2n6M4+ydT1JN7xPPLcQ479Rw16wa+3FY9VjEL2PikDZI3tLXsIzNcDvBCgcBgmAewnc17T6OBVzEIy6FwG8C9ueU3P5KZ2k2NdG4vpCZYd4jcR10fcDoJB8/FRFEJBdr45A5uurHDTvJCnVGnHVlwR9fQThmroZWVJaN5iMZjleBxDDkJ7nKCDuKlaKpfTPEkLyxzTcfZvvA5tPFpBBusp2IU8zwHUMLpnHQQmeLOeJ6qOS1/ADwTVXTSZ0jmgo4y9wYxrnvOjWtaXvd4NGpW5bG7JzTz5I8rp22zyduCgB94uHsyzkHRo0aeN9RtGy+wNXUi8rG0FM7tRxNDamYcnON3Buvvk/d4rrWDYRBRxNhgjbHG3gOJO9zjvc48yo1TpM83jAMGiooGQRCzW7ydXPce0954uJ1upFEVVhERAREQEREBERAREQEREBERAREQeHsurL4Fkogj5KO/BY02E3UyiajTKzZiR536LFZsU7mt9RTqNI/+kE732Xl3R3G8WfK4jkNLreUTUafS9G2HM7UIeftEkei2LDcIp6YWhhjjH2Whp8yFnIoBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z',
        title: 'HeadPhone ',
        description: 'Now that is super awesome!',
        price: 15
    }),
    new Product({
        imagePath: 'data:image/jpeg;base64,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',
        title: 'Shoes ',
        description: 'Lets Go',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
} 