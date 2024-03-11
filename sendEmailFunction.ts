import mailjet from "node-mailjet";

const mailjetClient = mailjet.connect(
  "df92719b746ff069f82809f61a4b6c61",
  "770bb486a9f9e86a695711bbd1c80151"
);

async function sendEmailToME(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "elpachris.obeng@appliedtechnology.se",
          Name: { name },
        },
        To: [
          {
            Email: "obengelpachris@gmail.com",
          },
        ],
        Subject: `Elpachris portfolio site message: ${email}`,
        HTMLPart: `
            <html>
              <head>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Feedback Received</h1>
                  </div>
                  <div class="message">
                    <p>Hi El-Pachris,</p>
                    <p>You have a new message from ${name}, with email address ${email}. message below.</p>
                    <div>
                    ${subject}
                    ${message}
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        CustomID: "El-Pachris Obeng Portfolio Website",
      },
    ],
  });
}

async function sendEmailToSender(name: string, email: string) {
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "elpachris.obeng@appliedtechnology.se",
          Name: "El-Pachris Obeng",
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: "Subject",
        HTMLPart: `
            <html>
              <head>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Feedback Received</h1>
                  </div>
                  <div class="message">
                    <p>Hi ${name},</p>
                    <p>Your message has been delivered successfully. I will get to you as soon as possible. Thank you for your patience</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        CustomID: "El-Pachris Obeng Portfolio Website",
      },
    ],
  });
}

export default async function sendFeedbackEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  await sendEmailToME(name, email, subject, message);
  await sendEmailToSender(name, email);
}
