import { Injectable } from '@angular/core';
import emailjs from "emailjs-com";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  readonly toMail = "roxytoilettage@outlook.be";

  constructor() { }

  sendMailToContactBox(clientMail: string, clientName: string, mailContent: string, clientPhone: string) {
    //contact.roxy.toilettage@gmail.com
    emailjs.send(
      'service_hl3pknn',
      'template_ruz6qm1',
      {
        to_mail: this.toMail,
        to_name: 'Roxy app',
        from_name: clientName + '<' + clientMail + '>' + ' <' + clientPhone + '>',
        message: mailContent
      },
      'FL1xFNRld2VrWOWAm')
      .then(res => console.log(res))
      .catch(err => console.log(err))

    emailjs.send(
      'service_hl3pknn',
      'template_ruz6qm1',
      {
        to_mail: clientMail,
        to_name: clientName,
        from_name: 'Roxy toilettage',
        message: 'Votre message a bien été transmis, \n' +
          'Merci, à bientôt.'
      },
      'FL1xFNRld2VrWOWAm')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
