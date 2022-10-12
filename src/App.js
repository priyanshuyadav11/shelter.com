// import logo from './logo.svg';
import "./App.css";
import shelter_logo from "./shelter_logo.svg";
// import 2cols from "./vendors/css/2cols.css";
import "./vendors/css/2cols.css";
import about from "./img/about.jpg";
// import carpenter from "./img/carpenter.jpg";
import "./vendors/css/3cols.css";
import carpenter_main from "./img/carpenter_main.png";
import cleaning_lady_main from "./img/cleaning_lady_main.png";
import plumber_main from "./img/plumber_main.png";
import restaurant_main from "./img/restaurant_main.png";
import electrician from "./img/electrician.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="row">
            <img className="logo" src={shelter_logo} alt="logo.png" />
            <ul className="main-nav">
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">
                    Shelter for
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#form">For Boys</a>
                    <a href="#form">For Girls</a>
                    <a href="#form">For Family</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#helping">comsol</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>
            Relocate
            <br />
            with shelter
          </h1>
          <p>
            We reduce the workload of the one who is seeking home on rent and
            who want to give his home on rent
          </p>
          <a className="btn btn-full" href="#plans">
            Explore
          </a>
          <a className="btn btn-ghost" href="#feature">
            Sign in
          </a>
        </div>
        <img className="logo1" src={shelter_logo} alt="logo.svg" />
      </header>
      {/* <section className="section-feature section-steps">
        <div class="about-section">
          <h1>About Us</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>        
      </section> */}
      <section class="section-steps" id="about">
        <div class="row">
          <h2>Our Company</h2>
        </div>
        <div class="row1">
          <div class="col span_1_of_2 steps-box">
            <img src={about} alt="living room" />
          </div>
          <div class="col span_1_of_2 steps-box steps-box2">
            <div class="works-steps">
              <div>What are we?</div>
              <p>
                We are Prayagraj based company established in 13 october 2022
                working for people to let them enjoy their time with their loved
                ones and not on finding houses to stay.
              </p>
            </div>
            <div class="works-steps">
              <div>What we do?</div>
              <p>
                We reduce the workload of the one who is seeking home on rent
                and who want to give his home on rent
              </p>
            </div>
            <div class="works-steps">
              <div>For Home seekers</div>
              <p>
                Just go to our website or app open it follow few easy steps and
                congratulations you find your suitable home for rent.
              </p>
            </div>

            <div class="works-steps">
              <div>Who wants to rent his/her house</div>
              <p>
                Just go to our website or app open it follow few easy steps and
                your home is ready for rent
              </p>
            </div>
            {/* <a href="#" class="btn-app"> <img src="resources/img/download-app-android.png" alt="app-store"/></a>
                <a href="#" class="btn-app"> <img src="resources/img/download-app.svg" alt="app-store"/></a> */}
          </div>
        </div>
      </section>

      <section className="helping_hands" id="helping">
        <h2>comsol</h2>
        <div className="helping">
          <div className="helpers">
            <div className="card1">
              <img src={carpenter_main} alt="carpenter" />
              <h3>carpenter</h3>
            </div>
            {/* <div className="hands">
            </div> */}
          </div>
          <div className="helpers">
            <div className="card1">
              <img src={plumber_main} alt="carpenter" />
              <h3>Plumber</h3>
            </div>
            {/* <div className="hands">
            </div> */}
          </div>
          <div className="helpers">
            <div className="card1">
              <img src={restaurant_main} alt="carpenter" />
              <h3>Food & beverages</h3>
            </div>
            {/* <div className="hands">
            </div> */}
          </div>
          <div className="helpers">
            <div className="card1 card2">
              <img src={electrician} alt="carpenter" />
              <h3>Electrician</h3>
            </div>
            {/* <div className="hands">
            </div> */}
          </div>
          <div className="helpers">
            <div className="card1 card3">
              <img src={cleaning_lady_main} alt="carpenter" />
              <h3>Sanitary workers</h3>
            </div>
            {/* <div className="hands">
            </div> */}
          </div>
        </div>
      </section>
      <section className="member"></section>
      <section className="section-form" id="form">
        <div className="row">
          <h2>Your dream shelter</h2>
        </div>
        <div className="row">
          <form action="#" method="POST" className="contact-form">
            <div className="row1">
              <div className="col span_1_of_3">
                <label>Name</label>
              </div>
              <div className="col span_2_of_3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>
            <div className="row1">
              <div className="col span_1_of_3">
                <label>Email id</label>
              </div>
              <div className="col span_2_of_3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="row1">
              <div className="col span_1_of_3">
                <label>What type of shelter you want</label>
              </div>
              <div className="col span_2_of_3">
                <select name="find-us" id="find-us">
                  <option value="friends">Family</option>
                  <option value="search">Girl</option>
                  <option value="advertisement">Boys</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>
            <div className="row1">
              <div className="col span_1_of_3">
                <label>Location</label>
              </div>
              <div className="col span_2_of_3">
                <address>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter location"
                    required
                  />
                </address>
              </div>
            </div>
            {/* <div class="row1">
                    <div class="col span_1_of_3">
                        <label>News letter?</label>
                    </div>
                    <div class="col span_2_of_3">
                        <input type="checkbox" name="news" id="news" checked/>
                    </div>
                </div> */}
            <div className="row1">
              <div className="col span_1_of_3">
                <label>Drop a line about your dream shelter</label>
              </div>
              <div className="col span_2_of_3">
                <textarea name="text" id="ta" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="row1">
              <div className="col span_1_of_3">
                <label>&nbsp;</label>
              </div>
              <div className="col span_2_of_3">
                <input type="submit" value="send-me" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <div className="row1">
          <div className="col span_1_of_2">
            <ul className="footer-nav">
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">IOS App</a>
              </li>
              <li>
                <a href="/">Android App</a>
              </li>
            </ul>
          </div>
          <div className="col span_1_of_2">
            <ul className="social-links">
              <li>
                <ion-icon className="fb" name="logo-facebook"></ion-icon>
              </li>
              <li>
                <ion-icon className="twitter" name="logo-twitter"></ion-icon>
              </li>
              <li>
                <ion-icon className="google" name="logo-google"></ion-icon>
              </li>
              <li>
                <ion-icon className="insta" name="logo-instagram"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>copyright &copy; 2015 by Shelter.com. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
