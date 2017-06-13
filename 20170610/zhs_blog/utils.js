let crypto = require("crypto");
module.exports = {
    encry(str){
        return crypto.createHash("md5").update(str).update(str).digest("hex");
        //return crypto.createHmac("sha1","zhs").update(str).update(str).digest("hex");
    }
};