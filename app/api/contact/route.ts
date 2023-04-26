import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";




const email = process.env.EMAIL;
const pass = process.env.PASSWORD;



export async function POST(req: Request, res: NextApiResponse) {
  const mail =  await req.json()
  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port:587,
    auth: {
      user: email,
      pass: pass,
    },
  });
 


  const toHostMailData ={
    from: mail.email,
    to: "ken.oshimoto@gmail.com",
    subject: `Oshimoto.net | from ${mail.name} | ${mail.subject}`,
    text: `${mail.message} send from ${mail.email}` ,
    html:`
    <p>NAME:</p>
    <p>${mail.name}</p>
    <p>EMAIL:</p>
    <p>${mail.email}</p>
    <p>TITLE</p>
    <p>${mail.subject}</p>
    <p>MESSAGE</p>
    <p>${mail.message}</p>
    `
  }

  let msg:string = "send"
  await transporter.sendMail(toHostMailData, (err, info) =>{
    if(err){
      msg = err.message
      console.log(err.message)
    }else{
      msg = "Message Sent!"
    }
  })
 

  return NextResponse.json(msg)
}