var express=require('express')
var app=new express
var path=require('path')
var nodemailer=require('nodemailer')



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/',(req,res)=>{
     res.set('Content-Type','text/html');
    res.sendFile(path.join(__dirname,'/index.html')); 
   
    });

app.get('/send',(req,res)=>{
    res.set('Content-Type','text/html');
    res.sendFile(path.join(__dirname,'/mailSender.html'));
 });
    
app.post('/send/sendEmail',(req,res)=>{
   
     let mailTransporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'niranjananath2022@gmail.com',
            pass:'niranjananath321'
        }
    });
    
    let mailDetails={
        from:'niranjananath2022@gmail.com',
        to:req.body.email,
        Subject:'Test Mail',
        text:'Node.js testing mail for coding challenge'
    }
    
    mailTransporter.sendMail(mailDetails,(err,data)=>{
        if(err){
        console.log('error occurs'+err)
        res.render('result',{resp:'Something went wrong'})
        }
        else{
        console.log('Email sent successfully')
        res.render('result',{resp:'Mail Sent Successfully'})
        } 
    });



    
})

app.listen(3000,()=>{
    console.log('server running at port 3000')
})



