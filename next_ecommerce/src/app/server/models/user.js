import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:String,
    password:String
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;