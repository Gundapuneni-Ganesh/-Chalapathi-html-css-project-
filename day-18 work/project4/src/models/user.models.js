const mongoose = require('mongoose');

const UserSchema = mongoose.Schema( {
    T_name:{
        type:String,
       default:require
    },
    T_age:{
        type:Number,
       default:require
    },
    T_id:{
        type:Number,
       default:require
    },
    T_address:{
        type:String,
       default:require
    },
    T_phone:{
        type:Number,
       default:require
    },
    T_email:{
        type:String,
       default:require
    },
    T_dateofBirth:{
        type:Date,
       default:require
    
   },
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    is_created:  { type: Boolean, default: false }
},
 {
    timestamps: true

});

module.exports = mongoose.model('topper', UserSchema);