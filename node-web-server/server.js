const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintainence.hbs');
// });

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

app.get('/projects', function(req, res) {
    res.render('projects.hbs', {
        pageTitle: 'Projects',
        name: 'Jacob',
        welcomeMessage: 'Welcomeeee to my projects'
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});