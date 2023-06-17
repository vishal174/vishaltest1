const mongoose = require('mongoose')


const url="mongodb+srv://vishal:vishal456@nodeexpressprojects.lprsere.mongodb.net/03-TASK-MANAGER"


const connectDB = () =>{
    return mongoose.connect(url ,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB