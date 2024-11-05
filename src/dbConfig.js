import mongoose from "mongoose";
 const ConnectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("connected to db")
        }).catch((error)=>{
            console.log(`Unable to connect to db error:${error.message}`)
        })
    } catch (error) {
        console.log(`Unable to connect to db error:${error.message}`)
    }
}


export default ConnectDB