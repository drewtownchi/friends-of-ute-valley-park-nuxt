import { parse } from 'querystring';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
require('dotenv').config();

export async function handler(event) {
  const data = event.body ? JSON.parse(event.body) : {};

  const errors = [];
  if (!data.email) {
    errors.push({
      message: "Email required",
      path: "email",
    });
  }

  if (!data.name) {
    errors.push({
      message: "Name required",
      path: "name",
    });
  }
  if (!data.category) {
    errors.push({
      message: "Category required",
      path: "category",
    });
  }
  if (!data.message) {
    errors.push({
      message: "Message required",
      path: "message",
    });
  }
  if (errors.length > 0) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        errors,
      }),
    };
  }

  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

  const jwtFromEnv = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: SCOPES,
  });

  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, jwtFromEnv);

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    Date: new Intl.DateTimeFormat('en-US').format(new Date()),
    Name: data.name,
    Email: data.email,
    Category: data.category,
    Message: data.message,
  });
  await sheet.saveUpdatedCells(); // save all updates in one call

  return {
    statusCode: 200,
    body: JSON.stringify({ status: true }),
  };
}
