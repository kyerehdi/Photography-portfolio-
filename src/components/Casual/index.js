import React from 'react'
import './style.css';
import img1 from '../vicspics/VW9A7870.JPG'
import { Link } from 'react-router-dom';
export default function Casual() {
    return (
        <div >
           <div className='logo4' onClick={event => window.location.href='/'}>
          Pics by Vic
        </div>
            <section className='center'>
           <h1>Pricing</h1>
           </section>
<div className='pbox'>
    <ul className='listbox'>
<section className='box'>
    <div className='greybox'>
    <h1 className='pricet'> Canon 5d Mark III Package </h1>
    <p className='center1'>$90</p>
    </div>
    <ul className='fitinbox'>
        <li className='fitinbox1'>100-300 photos JPEGs</li>
        <li className='fitinbox1'>Direct painted theme</li>
        <li className='fitinbox1'>22.2 Megapixel Full frame camera</li>
        <li className='fitinbox1'>1 provided flash drive with all photos</li>
        <li className='fitinbox1'>Vic's Top 3 Picks</li>
    </ul>
   <div>
   <button className='contactme' onClick={event => window.location.href='/contact'}>Select</button>

</div>

</section>

<section className='box'>
    <div className='greybox'>
    <h1 className='pricet'>
Canon T3 Package
</h1>
<p className='center1'>$60</p>
</div>
<ul className='fitinbox'>
        <li className='fitinbox1'>100-300 photos JPEGs</li>
        <li className='fitinbox1'>Direct painted theme</li>
        <li className='fitinbox1'>12 Megapixel cropped sensor camera</li>
        <li className='fitinbox1'>1 provided flash drive with all photos</li>
        <li className='fitinbox1'>Vic's Top 3 Picks</li>
    </ul>
   <div>
   <button className='contactme' onClick={event => window.location.href='/contact'}>Select</button>
</div>




</section>

<section className='box'>
  <div className='greybox'>
    <h1 className='pricet'>
Canon T3 Package
</h1>
<p className='center1'>$30</p>
</div>
<ul className='fitinbox'>
        <li className='fitinbox1'>50-150 photos JPEGs</li>
        <li className='fitinbox1'>No theme, just basic headshot's at my location</li>
        <li className='fitinbox1'>12 Megapixel cropped sensor camera</li>
        <li className='fitinbox1'>No provided flash </li>
        <li className='fitinbox1'>Vic's Top 3 Picks</li>
    </ul>
   <div>
   <button className='contactme' onClick={event => window.location.href='/contact'}>Select</button>
</div>

</section>
</ul>




</div>
<section className='add-ons'>
<div className='center'><h4>Add-Ons</h4></div>
<h1>RAW Photos Cost-10$</h1> 
<ul>
<li className='lss'>-Photos taken in RAW format instead of JPEG</li> 
<li className='lss'>-Sharper images</li>
<li className='lss'>-More data stored and can be heavily edited as opposed to JPEG</li>


<h2>Vic's Edits Cost-20$</h2>
<li className='lss'>-I edit photos of your choice (Up to 25)</li>
<li className='lss'>-I show you my methods and how to edit </li>
<li className='lss'>-One time purchase and will apply every time you return</li> 


<h3>Vic's Coupon: $10 off your package</h3> 
<li className='lss'>-Return flash drive OR provide a flash drive</li>
<li className='lss'>-Shout me out on 2 of your socials (Story Shoutout)</li> 
<li className='lss'>-Leaving a review on website and socials</li>
<li className='lss'>-Cannot apply to Barebones package</li>
 
</ul>
</section>

        </div>
    )
}
