var express = require('express');
var router = express.Router();
const sendSms = require("../utils/twillio");


router.post("/",async(req,res) =>{
    try{
        //generate 4 digits OTP
        let otp = Math.floor(1000 + Math.random() * 9000);
        let phone = "+918840257645"

        try{
            const message = `Your verification code is ${otp}`;
            await sendSms(phone,message);
            return res.status(200).json({
                status:true,
                msg:`A verification otp sent to your ${phone} and otp is ${otp}` //have to change in production
            });

        }catch(err){
            console.log(err)
            return res.status(500).json({
                status:false,
                msg:"There was an error sending the otp to phone. Try again later!"
            })
        }

    }catch(err){
        console.log(err)
        return res.status(500).json({
            status:false,
            msg:err.message
        })
    }
})

module.exports = router;