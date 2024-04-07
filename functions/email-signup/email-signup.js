import axios from "axios";
require("dotenv").config();

export async function handler(event) {
  const data = event.body ? JSON.parse(event.body) : {};
  // eslint-disable-next-line no-console
  const errors = [];
  if (!data.email) {
    errors.push({
      message: "Email required",
      path: "email",
    });
  }

  if (!data.name) {
    errors.push({
      message: "Full name required",
      path: "name",
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

  try {
    const authRequest = await axios.post(
      "https://api.sendpulse.com/oauth/access_token",
      {
        grant_type: "client_credentials",
        client_id: process.env.SENDPULSE_CLIENT_ID,
        client_secret: process.env.SENDPULSE_CLIENT_SECRET,
      }
    );

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${authRequest.data.access_token}`,
      },
    };

    const res = await axios.post(
      `https://api.sendpulse.com/addressbooks/${process.env.SENDPULSE_MAILING_LIST_ID}/emails`,
      {
        emails: [
          {
            email: data.email,
            variables: {
              name: data.name,
            },
          },
        ],
        confirmation: "force",
        sender_email: "contact@friendsofutevalleypark.com",
        template_id: process.env.SENDPULSE_CONFIRMATION_ID,
        message_lang: "en",
      },
      config
    );

    if (res.data.result === true) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: true }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ status: false, message: res.data.result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: false, message: error.message }),
    };
  }
}
