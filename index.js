const nodemailer = require('nodemailer')

async function main(){


    const transporter = nodemailer.createTransport({ // Configura os parâmetros de conexão com servidor.
        host: 'smtp.mailtrap.io',
        port: 2525,
        secure: true,
        auth: {
          user: 'c1f7ae9df0e570',
          pass: 'b3787da43a19c9'
        },
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
      })

    const mailOption = {
        from: 'navob14384@tmails.top',
        to:'navob14384@tmails.top',
        subject: 'Teste',
        text:'HelloWorld!'
    }

    transporter.sendMail(mailOption, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

    });

}

main();