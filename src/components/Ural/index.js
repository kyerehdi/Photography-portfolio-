import React from 'react'
import './style.css'
import img1 from '../vicspics/pic22.jpg'
import {useState} from 'react';
import FAQ from './FAQ';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

export default function Ural() {
const [faqs, setfaqs] = useState([

{
    question: 'What should I expect from a photoshoot?',
    answer: 'We will have a thorough discussion beforehand about our vision for the shoot. We will discuss theme, color , location, outfit, angles, and examples. So that before we even step foot on the shoot, we both have an idea of what our goals are.  From there it will be a mix of me directing you to pose and you free-style posing',
    open: false
},
{
    question: 'How long does a photoshoot usually take?',
    answer: 'I do not strictly keep track of time or photos on photoshoots, as that would hinder my quality. My priority is taking as many great photos at our location until the sun goes down. Usually I take 100 photos in 15-20 minutes. The longest shoot I had was 1 hour and 30 minutes for 411 photos. Shortest shoot was 121 photos in 15 minutes',
    open:false
},
{
    question: 'How far is your service radius? ',
    answer: 'I am located in Woodbridge and my service radius is 15  miles. For every mile over 15 you will be charged 1 dollar per mile. (MGM Grand is 30 miles from me so it would add $15 to package total)',
    open:false
},
{
    question: 'How long will I wait for my photos? ',
    answer: 'Like 10 minutes after our shoot is done. I have a laptop where I will immediately transfer your photos to a flash drive. Barebones will get their pictures emailed same day',
    open:false
},
{
    question: 'Why do you take so many photos?',
    answer: 'Realistically speaking, out of 300 photos, only about 10-20 will be stellar Instagram worthy photos. Unless you are photogenically blessed. Also capitalize on the fact that I take so many, by bringing 1-3 change of outfits. That way it seems like you got 3 different shoots in one go around',
    open:false
},
{
    question: 'Why do you offer BareBones? ',
    answer: 'For anyone in',
    open:false
},
{
    question:'Why do you offer BareBones? ',
    answer:'For anyone in need of QUICK headshot pictures. I understand not everyone wants a beautiful thematic set of 300 photos that they can reminisce on years later :)',
    open:false
},
{
question:'What is the difference between the 5d Mark III package and the T3 package?',
answer:"The camera and picture quality. The 5d Mark 3 is a full frame 22Megapixel DSLR. The T3 is a 12 megapixel cropped frame DSLR. The 5d Mark 3 is better in EVERY aspect regarding picture quality. If you wish to read specifics, check out Canon's official website.",
open:false

},
{
    question:"What time do you take photos?",
    answer:"Golden hour, the hour leading up to sunset. Best lighting and best chance of getting a beautiful sky",
    open:false

}

]
);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


    return (
        <div>
            <div className='logo2'onClick={event => window.location.href='/'} >
            Pics by Vic
        </div>
        <section className="leftside">

<div className="sidenav">
          
<ul className="PageList">
    <Link to="/"><li className="elementsONE">Home</li></Link>
    <Link to="/ural"><li className="elementsONE">About Me</li></Link>
    <Link to="/contact"><li className="elementsONE">Contact Me</li></Link>
    <Link to="/casual"><li className="elementsONE">Pricing</li></Link>

</ul>
<div className='socials'>

<div className='flex'> 
 <a href="https://www.instagram.com/victors.pix/"> <FontAwesomeIcon icon={faInstagram} className='eachs'></FontAwesomeIcon></a>
     <a href ="mailto:victorgonzalez205@gmail.com"><FontAwesomeIcon icon={faMedium} className='eachs'></FontAwesomeIcon></a>
  <a href='https://www.linkedin.com/in/victorgonzalez2000/' >   <FontAwesomeIcon icon={faLinkedin} className='eachs'></FontAwesomeIcon></a></div>
  
</div>
<section className='pa'>
   " A camera that puts a world of possibilities at your fingertips. Literally"
</section>
</div>
</section>

           <section className='halfpage'>
<img  className="pic" src={img1} />
           </section>
           <h1 className='about'>Victor Gonzalez</h1>
           <div className='boxx'>
            <p className='ps'>   I have always been sentimental and found photos to be priceless, a moment in time captured as a painting. in 2019 I started my DSLR career, falling in love with the great outdoors and portrait photography. based in Northern Virginia, i take pictures ranging from MGM Grand city enviroments, to the Shenandoah Moutains.
                 </p>
                 <div className='btn' onClick={event => window.location.href='/contact'}><h1 className='center'>Contact Me</h1></div>

           </div>
           <h1>FAQ</h1>
           <div className='faqs'>
 {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
           </div>
        </div>
    )
}
