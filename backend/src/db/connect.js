import mongoose from "mongoose";

function connect(){
    return mongoose.connect("mongodb://localhost:27017/myTask");
}

export default connect;