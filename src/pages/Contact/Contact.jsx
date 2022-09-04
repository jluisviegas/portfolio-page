import { useRef, useEffect} from 'react';
import './style.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  
  const labels = document.querySelectorAll('.form-control label')

  labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index *50}ms">${letter}</span>`)
    .join('')
  })
 
  return (
   <section id="contact-section">
     <h2 className="ff-headers uppercase fs-700">Contato</h2>

     <div className=" container contact-container">
       <div className="contact-options">
         <article className='contact-option'>
           <MdOutlineEmail/>
           <h4 className="ff-headers fw-700 uppercase">Email</h4>
           <h5 className="fw-300">jluisviegas@hotmail.com</h5>
           <a href="mailto: jluisviegas@hotmail.com" target="_blank">Enviar E-Mail</a>
         </article>
         <article className='contact-option'>
           <BsWhatsapp/>
           <h4 className="ff-headers fw-700 uppercase">Whatsapp</h4>
           <h5 className="fw-300">+55 98 99171 2252</h5>
           <a href="https://api.whatsapp.com/send?phone=5598991712252" target="_blank">Enviar Mensagem</a>
         </article>
      </div>

      <form action="">
        <div className="form-control">
          <input type="text" name='name' required />
          <label>Nome</label>
        </div>
        <div className="form-control">
          <input type="email" name='email' required />
          <label>Email</label>
        </div>
        <div>
          <textarea name="message" rows="7" placeholder='...'></textarea>
        </div>
        <button type='submit' className='ff-primary btn'>Enviar</button>
      </form>
     </div>
   </section>
  )
}

export default Contact