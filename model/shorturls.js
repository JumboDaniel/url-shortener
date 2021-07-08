const { Mongoose } = require("mongoose");
const schenma = Mongoose.schema;

const shortUrlsSchema = new schenma({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true
    },
    clicks:{

    }
})