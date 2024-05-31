var express = require('express');
var http= require('http');
var nodemailer = require('nodemailer');
const path = require('path');


var app = express();
var server= http.Server(app);
port=3000;
app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/')));

//rota
app.get("/" , function(req, res) {
  
    res.render('index.php');
})

app.post("/send_email", function(req, res){
    var from =req.body.email;
    var to="thiago5437br@gmail.com";
    var subject = req.body.nome;
    var message = "nome:  " + subject + "\n" + "mensagem: " +  req.body.mensagem + "\n" + "email:" + "  " + from ;

    var transporter = nodemailer.createTransport( {
        service: 'gmail', //talvez de erro
        auth: {
            user:'thiago5437br@gmail.com',
            pass: 'mrrgaggasvbiwpcf'
        }

    });

    var mailoptions = {
        from: from,
        to:to,
        subject:subject,
        text: message

    }

    transporter.sendMail (mailoptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, error: error.message }); // Envie uma resposta JSON indicando erro
        } else {
            console.log("Email enviado: " + info.response);
            res.redirect("/#formu"); 
        }  

        
    })

})


// inicialize web server
server.listen(process.env.PORT||port, function(){
    console.log("starting server on port ")
})