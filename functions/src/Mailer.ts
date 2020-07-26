import * as nodemailer from 'nodemailer';
const options = {
  service: 'gmail',
  auth: {
    user: 'ingjohnson7@gmail.com',
    pass: 'dfuqppsgookfkquw',
  },
  tls: {
    rejectUnauthorized: false
  }
};
const transporter = nodemailer.createTransport(options);


export class Mailer {
  constructor() { }

  send(email: string, name: string, phone: string, reason: string, body: string) {
    const options = {
      from: 'contacto@snow-software.com',
      to: 'ingjohnson7@gmail.com, brayansoftdev@gmail.com',
      text: body,
      html: this.buildBody(name, phone, reason, body),
      subject: 'Solicitud cotización Snow Software',
    };
    // if (email) {
    //   options.to = email;
    // }
    transporter.sendMail(options, (error, info) => {
      console.log('Transporter send!');
      if (error) {
        console.log('ERROR SENDING MAIL: ', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  buildBody(name: string, phone: string, reason: string, body: string) {
    return `
      <br>
      <b>Nombre:</b> ${name}<br>
      <b>Telefono:</b> ${phone}<br>
      <b>Me interesa:</b> ${reason}<br><br>
      <p>${body}</p>
    `;
  }
}
