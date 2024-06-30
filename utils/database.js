import mongoose from "mongoose";

let isConnected = false

export const connectToDb = async () => {
    mongoose.set("strictQuery")

    if(isConnected){
        console.log("MongoDB already connected")
        return
    }
    try {
        mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share-prompt",
        })
        isConnected = true
        console.log("MongoDB connected.")
        
    } catch (error) {
        console.log(error)
    }


}