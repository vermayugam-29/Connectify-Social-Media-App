const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
url="mongodb://127.0.0.1:27017/users";
mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
