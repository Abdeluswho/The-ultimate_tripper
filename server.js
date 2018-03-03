let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
const exphbs = require("express-handlebars");
var db = require('./models');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ================================================================================
// ROUTER
// ================================================================================
// var routes = require('./routes/apiRoutes.js')
// app.use(routes);
require ("./routes/apiRoutes.js")(app);
require ("./routes/htmlRoutes.js")(app);
require ("./routes/dbRoutes.js")(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
