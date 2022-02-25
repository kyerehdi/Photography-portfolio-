import react from "react";
import Logo from "./Logo";
import Navbar from "./NavHome";
import './style.css'


function Home() {
return (   
    
<body className="slider">
    <div >
        <div className="load">
        </div>
             <div className="content">
                 <div className="principal">
                     <Logo />
 <section className="middle">
<Navbar />
</section>
<div className="contacts">
    <ul className="listOne">
        <a href="https://www.instagram.com/victors.pix/"><li className="itemone">Instagram</li></a>
        <li className="itemTwo">(571)-477-4446</li>
        <a href="mailto:victorgonzalez205@gmail.com"><li className="itemThree">victorgonzalez205@gmail.com</li></a>
    </ul>
</div>


                 </div>
             </div>

    </div>
<section className="secondWall">
<div className="pictwo">

</div>
</section>




</body>



    
)



}
export default Home;