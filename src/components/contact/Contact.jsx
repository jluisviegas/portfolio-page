import React from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
   <section id="contact">
     <h2>Contato</h2>

     <div className=" container contact__container">
       <div className="contact__options">
         <article className='contact__option'>
           <MdOutlineEmail/>
           <h4>Email</h4>
           <h5>jluisviegas@hotmail.com</h5>
           <a href="mailto: jluisviegas@hotmail.com" target="_blank">Enviar Mensagem</a>
         </article>
         <article className='contact__option'>
           <BsWhatsapp/>
           <h4>Whatsapp</h4>
           <h5>+55 98 99171 2252</h5>
           <a href="https://api.whatsapp.com/send?phone=5598991712252" target="_blank">Enviar Mensagem</a>
         </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder="Nome Completo" required />
        <input type="email" name='email' placeholder="Email" required />
        <textarea name="message" rows="7" placeholder="Mensagem"></textarea>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
     </div>
   </section>
  )
}

export default Contact