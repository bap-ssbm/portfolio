'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";
import { BiLoaderAlt } from 'react-icons/bi'
import Button from '../MainComponents/ui/buttons/Button';



interface FormProps {

}



const Form: FC<FormProps> = ({ }) => {


  const [msg, setmsg] = useState<string|null>()
  
  const [isLoading, setIsLoading] = useState<Boolean>(false)



  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [captchaComplete, setCaptchaComplete] = useState<boolean>(false)
  const captchaChange = () => {
    setCaptchaComplete(true)
  }

  const catchName = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const catchEmail = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const catchSubject = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setSubject(e.target.value)
  }
  const catchMessasge = (e : React.ChangeEvent<HTMLTextAreaElement>)=>{
    setMessage(e.target.value)
  }


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(captchaComplete){
      let data={
      name: name,
      message: message,
      email: email,
      subject: subject
    }
    console.log(data)
    setIsLoading(true)
    await fetch("api/contact", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(data)
    }).then((res)=>{
      
      if(res.status===200){
        setmsg("Message sent!")
        setIsLoading(false);
        setMessage("")
        setSubject("")
      }else{
        setIsLoading(false);
        setmsg("Something went wrong please try again!")
      }
    })
  }else{
    setmsg("Please complete ReCAPTCHA first")
  }

    setIsLoading(false);
  }
  return (
    <motion.form
  
      onSubmit={onSubmit}
      initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
      className='flex flex-col gap-7 items-center lg:items-start w-full'>

      <input
        className='w-full border-black bg-transparent border text-[16px] dark:border-white focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest dark:text-white font-Source-Sans-Pro transition duration-300'
        onChange={catchName}
        value={name}
        type='text'
        name='name'
        placeholder='Name'
        required
      />
      <input
        className='w-full bg-transparent border text-[16px] border-black dark:border-white focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest dark:text-white font-Source-Sans-Pro transition duration-300'
        onChange={catchEmail}
        value={email}
        type='email'
        name='email'
        placeholder='Email'
        required
      />
      <input
        className='w-full bg-transparent border border-black text-[16px] dark:border-white focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest dark:text-white font-Source-Sans-Pro transition duration-300'
        onChange={catchSubject}
        value={subject}
        type='text'
        name='subject'
        placeholder='Subject'
        required
      />
      <textarea
        placeholder='Message'
        value={message}
        onChange={catchMessasge}
        name='message'
        className='w-full bg-transparent border-black border text-[16px] dark:border-white focus:opacity-100 focus-within:opacity-95 py-2 px-4 tracking-widest dark:text-white font-Source-Sans-Pro transition duration-300'
        rows={5}
        required
      />
        
      <Button >
        {isLoading ? (<BiLoaderAlt className='animate-spin' />) : ("Send Message")}
      </Button>
      {msg&&<p className='tracking-[2px] text-[18px]'>{msg}</p>}
      <ReCAPTCHA
        sitekey="6LcdWL8lAAAAAFJdg_JrOgcqb52F-5mbNuqRBg0K"
        onChange={captchaChange}
        onExpired={()=>setCaptchaComplete(false)}
      />
    </motion.form>
  )
}

export default Form
