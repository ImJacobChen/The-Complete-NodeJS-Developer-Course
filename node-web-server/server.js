const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', function(req, res) {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        name: 'Jacob',
        welcomeMessage: 'Welcomeeee'
    })
});

app.get('/about', function(req, res) {
    res.render('about.hbs', {
        pageTitle: 'About page',
        name: 'Jacob',
        welcomeMessage: 'Welcomeeee'
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});