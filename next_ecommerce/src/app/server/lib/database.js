import mongoose from "mongoose"

    try {
        mongoose.connect('mongodb://localhost:27017/bloggingapp1'
        ).then(()=>{
            console.log('Connected to db');
        })
    } catch (error) {
        console.log('Failed to connect to db')
    }
