import mongoose from "mongoose";
const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-rxcjudk-shard-00-00.4vdk6fe.mongodb.net:27017,ac-rxcjudk-shard-00-01.4vdk6fe.mongodb.net:27017,ac-rxcjudk-shard-00-02.4vdk6fe.mongodb.net:27017/?ssl=true&replicaSet=atlas-bqyyq4-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true})
       console.log("connected successfully")
    }
    catch(error){
        console.log('error while creating',error.message)
    }
}
export default Connection;