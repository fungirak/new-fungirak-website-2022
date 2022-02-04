
const express = require('express');
const router = express.Router();
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');
const emailsSchema = require('../models/email');

//const { check, validationResult } = require('express-validator');
// PRÓXIMAS TAREAS , AUMENTAR LA VERIFICACIÓN DE LOS DATOS.


// Recibir y guardar un email.
router.post('/contacto',  (req, res) => {
   const email = emailsSchema(req.body);
   const { asunto, nombre, apellido, company, website, emisor, telefono, mensaje  } = email ;

   email
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));


            // async..await is not allowed in global scope, must use a wrapper
        async function testNodemailer() {
                    
                    // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport        
            let transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            let transporter2 = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });
            
            // MENSAJE QUE RECIBO YO DE CUALQUIER PERSONA QUE VISITE EL SITIO.
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: `"FUNGIRAK" <${emisor}>`, // sender address
                to: process.env.EMAIL_ADMIN, // list of receivers
                subject: `${nombre} ${apellido}`, // Subject line
                text: ``, // plain text body
                html: `
                <br><br>
                <b>NUEVO MENSAJE RECIBIDO</b><br>
                <b>DE: </b><span>${nombre} ${apellido}</span>
                <p>Empresa: ${company}</p>
                <p>Sitio Web: ${website}</p>
                <p>Teléfono: ${telefono}</p>
                <b>Asunto: ${asunto}</b>
                <br>
                <b>Mensaje: ${mensaje}</b>
                <br><br>
                `, // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>



            // MENSAJE QUE RECIBE EL VISITANTE COMO CONFIRMACIÓN DE ENTREGA.
             // send mail with defined transport object
             let info2 = await transporter2.sendMail({
                from: `"FUNGIRAK" <fungirak@gmail.com>`, // sender address
                to: `${emisor}`, // list of receivers
                subject: "Mensaje entregado satisfactoriamente.", // Subject line
                text: `Hello`, // plain text body
                html: `
                <style type="text/css">
                    body {
                        background-image: url("https://scontent.fsfn7-1.fna.fbcdn.net/v/t39.30808-6/272961902_266449862278475_241462261088485823_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=yOBy17ra1GAAX9tLzx4&_nc_ht=scontent.fsfn7-1.fna&oh=00_AT_-OHf7Cz7ACgjyLX9IgwV0RBmb62k1DTw3xVYJuZMnmQ&oe=61F9CD91"); 
                        background-repeat: no-repeat;
                        background-position: -105px 0px;
                        padding: 1.5em; 
                        border: 2px solid black;
                       
                    }
                    .sello{
                        background: red;
                        padding: .5em;
                        border-radius: 5px; 
                    }
                    .centrar{
                       text-align: center;
                    }
                    .sm{
                        font-size: 10px;
                    }
                    .bold{
                        font-weight: bold;
                    }
                </style>
                <body>
                <br><br><br><br><br><br><br><br><br><br><br><br>
                <h3>Estimado/a: ${nombre} ${apellido}, </h3><br>
                <h4>Su mensaje ha sido recibido por FUNGIRAK DevTeam,</h4>
                <h4>En breve se comunicará con usted.</h4>
                <br><hr><br>
                <b class="centrar bold">Detalles del mensaje enviado:</b><br>
                <b class="bold">Nombre y Apellido: </b><span>${nombre} ${apellido}</span><br>
                <b class="bold">Correo Electrónico: </b><span>${emisor}</span><br>
                <b class="bold">Teléfono: </b><span>${telefono}</span><br>
                <b class="bold">Empresa: </b><span>${company}</span><br>
                <b class="bold">Asunto: </b><span>${asunto}</span><br>
                <b class="bold">Sitio Web: </b><span>${website}</span><br>
                <b class="bold">Mensaje:</b><span>${mensaje}</span><br>
                <br><hr><br>
                <p  class="centrar sello bold"> FUNGIRAK DevTeam.</p>
                </body>
                <br>
                <a href="https://www.fungirak.com" class="centrar" style="text-decoration: none;"><p class="sm centrar bold">Política de Privacidad en www.fungirak.com</p></a>
                `, // html body
                attachments: [{
                    filename: 'fungirak-services.pdf',
                    path: path.join(__dirname, '../media/fungirak-services.pdf'),
                    contentType: 'application/pdf'
                }]
            });

            console.log("Message sent: %s", info2.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        
        }
        
        testNodemailer().catch(console.error);


});

// SOLO DESARROLLO
/*
// Obtener todos los registros. // 
router.get('/emails', (req, res) => {
    emailsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

// get one email.
router.get('/emails/:id', (req, res) => {
    const { id } = req.params;
    emailsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});


// delete a email.
router.delete('/emails/:id', (req, res) => {
    const { id } = req.params;
    emailsSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

*/


module.exports = router;
