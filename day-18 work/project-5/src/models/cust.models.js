const mongoose = require('mongoose');

const custSchema = mongoose.Schema( {
   
    C_id:{
        type:Number,
       default:require
    },
    C_aadhar:{
        type:String,
       default:require
    },
    C_pan:{
        type:Number,
       default:require
    },
    
    C_dateofBirth:{
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

module.exports = mongoose.model('customer', custSchema);