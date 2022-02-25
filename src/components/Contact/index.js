import React from 'react'
import './style.css';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';




export default function Casual() {

function sendemail(e) {
     e.preventDefault();
 emailjs.sendForm('service_vlg1bze', 'template_fa0ucb8', e.target, 'user_y15UFJDBfhwiRu6FcDfxt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        
      e.target.reset();
}


return (
<div className='oop'>
    <div className='logo3' onClick={event => window.location.href='/'} >
            Pics by Vic
        </div>
<div className='outline'>
    <form onSubmit={sendemail}>
<h1 className='color'> Contact Me
</h1>
<div className='gg'>
 <section> <h2 className='color'>Name</h2>
<input className='textt' name ="name"></input>
</section>
<section>
<h2 className='color'>Your Email</h2>
<input className='textt' name="email"></input>
</section>
<section>
    <section>
<h2 className='color'>Message</h2>
<textarea className='textbox'name="message"></textarea>
</section>

    <h2 className='color'>
Package
</h2>
<div className='color'>
    <input type='checkbox' className='space' name="choice1"></input>Canon 5d Mark III Package
    <input type='checkbox' className='space' name="choice2"></input> Canon T3 Package
    <input type='checkbox' className='space' name="choice3"></input> Barebones Package
</div>

</section>

</div>

<button className='submit' > Send Message</button>

</form>


</div>

</div>

)


}