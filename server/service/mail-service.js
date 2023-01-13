const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6728c3fe8e3d7e",
        pass: "93f9a9be93d8c2"
      }
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Acc activation " + process.env.API_URL,
      text: "",
      html: `
          <div>
            <h1>Follow link to activate acc</h1>
            <a href="${link}">${link}</a>
          </div>
        `,
    });
  }
}

module.exports = new MailService();
