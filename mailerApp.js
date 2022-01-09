const nodemailer=require('nodemailer')


function send(email){

let mailTransporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'niranjananath2022@gmail.com',
        pass:'niranjananath321'
    }
});

let mailDetails={
    from:'niranjananath2022@gmail.com',
    to:email,
    Subject:'Test Mail',
    text:'Node.js testing mail for project'
}

mailTransporter.sendMail(mailDetails,(err,data)=>{
if(err){
    console.log('error occurs'+err)
    res.send('something went wrong')
}
    else{
    console.log('Email sent successfully')
    return true;
    }
});

}

module.exports.send=send