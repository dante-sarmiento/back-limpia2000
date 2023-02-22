let express = require('express');
let app = express();
let user_routes = require("./routes/user.routes")
let clients_routes = require("./routes/clients.routes")
let months_routes = require("./routes/months.routes")
let losses_routes = require("./routes/losses.routes")
let cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api', [
    user_routes,
    clients_routes,
    months_routes,
    losses_routes
])

module.exports = app