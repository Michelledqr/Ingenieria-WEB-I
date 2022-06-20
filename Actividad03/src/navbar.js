const menu = document.querySelector('.menu');
const feet = document.querySelector('.feet');

let navbar=
`
<nav class=pink darken-4>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo right">  
            <img src="./favicon.ico" alt="Logo">
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="index.html">Home</a></li>
            <li><a href="newBike.html">New Bike</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
    </div>
</nav>
`
let foot =
`
<footer class="page-footer pink darken-4">
    <div class="container">
      <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">About us</h5>
                <p class="grey-text text-lighten-4">IUDigital: Academic Testing.</p>
            </div>
      </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            © 2022 Copyright Michelle D. Robinson
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
    </div>
</footer>
`
menu.innerHTML=navbar;
feet.innerHTML=foot;
