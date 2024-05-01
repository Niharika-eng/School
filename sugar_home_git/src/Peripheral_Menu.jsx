import React from 'react';
import ReactDom from 'react-dom';
import './Peripheral_Menu.css';
import Sprinkle2 from './assets/Sprinkles1 (2).svg';
import Sprinkle3 from './assets/Sprinkles1 (3).svg';

export default function Peripheral_Menu() {
  return (
    <div id='pmenu'>
      <div class="img1-container">
        <div class="image-wrapper">
          <img src={Sprinkle2} />
          <img src={Sprinkle3} />
        </div>
      </div>

      <div class="menu-headings">  {/* New container for headings */}
        <h1 class="menu_heading">Our</h1>
        <h1 class="menu_heading_1">Menu</h1>
      </div>

      <div class="card-container">  {/* Container for the cards */}
      <div class="card_1">
        <div class="card my-card-size">
          <img src="src/assets/Menu_image_1.jpg" class="card-img-top" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">Thickshakes</p>
          </div>
        </div>
      </div>

        <div class="card_2">
            <div class="card my-card-size">
            <img src="src/assets/Menu_image_1.jpg" class="card-img-top" alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">Thickshakes</p>
            </div>
            </div>
        </div>

        <div class="card_3">
            <div class="card my-card-size">
            <img src="src/assets/Menu_image_1.jpg" class="card-img-top" alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">Thickshakes</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
