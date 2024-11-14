const MAIL_TEMPLATE = ({ myself, name, phone, email }) => {
  return `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Email From Sudisa</title>
              <style>
                .container {
                  width: 100%;
                  height: 100%;
                  padding: 20px;
                  background-color: #f4f4f4;
                }
                .email {
                  width: 80%;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                }
                .email-header {
                  background-color: #333;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
                .email-body {
                  padding: 20px;
                  font-size: 16px;
                }
                .email-footer {
                  background-color: #333;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="email">
                  <div class="email-header">
                    <h1>Enquiry to Jeevone</h1>
                  </div>
                  <div class="email-body">
                    <p>${`You got a new enquiry from a ${myself}.`}</p>
                    <p>${`Name: ${name}`}</p>
                    <p>${`Email: ${email}`}</p>
                    <p>${`Phone: ${phone}`}</p>
                  </div>
                  <div class="email-footer">
                    <p>Don't reply to this mail.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;
};

module.exports = MAIL_TEMPLATE;
