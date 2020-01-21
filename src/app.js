const fs = require('fs');
const path = require('path');
const express = require('espress');

const app = express();

app.path.join('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));