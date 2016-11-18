var express = require('express');
    path = require('path');
    bodyParser = require('body-parser')
    app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// require('./config/mongoose.js');
// require('./config/routes.js')(app);


app.listen(8000, function(){
    console.log('Listening on port 8000');
})
