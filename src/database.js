const mongoose = require('mongoose')

mongoose
    .connect("mongodb://localhost/transmisiones", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((db) => console.log("Bd is connected"))
    .catch((err) => console.error(err));
