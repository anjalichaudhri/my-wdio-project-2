var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

const mailOptions = {
    from: 'testcoach2.ac@gmail.com', // sender address
    to: 'testcoach2.ac@gmail.com', // list of receivers
    subject: 'DEV ENVIRONMENT | Automation Report (DO NOT REPLY)', // Subject line
    html: '<p>Hi everyone,<br><br>Greetings!<br><br>Please access the automation report by clicking '+
    '<a href="http://anjaligc.surge.sh/index.html">here</a>.</p>' +
    '<b>Environment</b>: DEV<br><br>' +
    'Please share your valuable feedback. For any feedback or query reach out to GrapeSEED Quality Assurance team.<br><br> Thanks & Regards,<br>Quality Assurance Team<br>GrapeSEED'
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log("error while sending email: " + err)
    else
        console.log("***********mail sent successfully***********" + info);
});