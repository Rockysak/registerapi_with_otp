const modal = require('../modals/usermodals')

const details =  require('../../emailpass');

const nodemailer = require('nodemailer');

const setotp =new Map();

let transporter = nodemailer.createTransport({

    service : 'Gmail',
    auth : {

        user : details.email,
        pass : details.password,
    },
});

const reguser = async (req, res) => {

    try {

        const userEmail = req.body.email
        // console.log(data);
        console.log(userEmail);

        const otp = Math.floor(Math.random() * 900 * 10000)

        console.log(otp)

        setotp.set(userEmail,otp.toString())

        const options = {

            from : details.email,
            to : userEmail,
            subject : 'One Time Password For Registration',
            text : `Your OTP is ${otp}`
        };

        transporter.sendMail(options,(error,info)=>{

            if(error) return res.status(202).json({message : false});

            res.status(200).json({message : true});
        })

        const mdata = new modal(userEmail);
        const response = await mdata.save();
    //     res.status(200).json({
    //         message: "register success",
    //         data: response
    //    })

    }

    catch (err) {

        console.log(err);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

const otpuser = async (req,res)=>{

    const user_data = req.body;
    const email = user_data.email;

    const otp = user_data.otp;

    const sentotp =  setotp.get(email);

    if(sentotp !== otp) return res.status(403).json({message : 'Invalid otp', okay : false})

        console.log("done")
        
        res.status(200).json({message : 'registration succesfull' , okay : true});
}

module.exports={reguser,otpuser};
