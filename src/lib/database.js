import mongoose from "mongoose";

let isConnect = false;
export const connectDB = async() => {
    mongoose.set("strictQuery",true);
    if(!process.env.MONGODB_URI){
console.log('missing mongodb url');
    }
    if(isConnect)
    {
        return console.log("=> Using existimg database connection");
    }
try {
    await mongoose.connect(process.env.MONGODB_URI
    );
    isConnect = true;
    console.log('MongoDB connect suseccfuly');
    
} catch (error) {
    console.log(error, "fail to connect to db")
}
    }