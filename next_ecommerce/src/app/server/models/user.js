import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:String,
    password:String
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;