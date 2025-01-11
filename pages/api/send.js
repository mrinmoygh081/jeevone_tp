import { query } from "@/db/db";
import MAIL_TEMPLATE from "@/utils/mail-templates";
import SENDMAIL from "@/utils/mailSend";
import { sendRes } from "@/utils/resHelper";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { myself, name, phone, email } = req.body;

    try {
      const result = await query({
        query: `INSERT INTO doctors (type, name, phone, email) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [myself, name, phone, email],
      });
      if (result) {
        sendRes(
          res,
          true,
          200,
          "Our team will reach out to you soon.",
          result,
          null
        );

        let toEmails = "contact@jeevone.com, jijesh.gopalan@jeevone.com";
        // let toEmails = "mrinmoyghosh102@gmail.com";

        // Trigger a mail
        let mailDetails = {
          from: process.env.SENDER_MAIL,
          to: toEmails,
          subject: `Enquiry from ${name} to Jeevone`,
          bcc: "mrinmoyghosh102@gmail.com",
          html: MAIL_TEMPLATE(req.body),
        };
        SENDMAIL(mailDetails, function (err, data) {
          if (!err) {
            console.log("Error Occurs", err);
          } else {
            console.log("Email sent successfully");
          }
        });
      } else {
        sendRes(res, false, 200, "No Record Found", result, null);
      }
    } catch (error) {
      console.log(error);
      sendRes(res, false, 400, "Error", error, null);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
