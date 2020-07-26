import * as functions from 'firebase-functions';
import { Mailer } from './Mailer';
import * as express from 'express';
const cors = require('cors')({
  origin: true
});
const expressApp = express();

expressApp.use(cors);
expressApp.post('/mail', (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  console.log('==> request.body: ', request.body);

  const { email, name, phone, reason, body } = request.body;
  if (!email || !name || !phone || !reason || !body) {
    response.status(400).send('Missing params');
  } else {

    new Mailer().send(email, name, phone, reason, body);

    response.send('ok');

  }
});

export const app = functions.https.onRequest(expressApp);


