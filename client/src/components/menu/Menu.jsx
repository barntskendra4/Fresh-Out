import React from 'react';
import Navbar from '../nav/Navbar';
import './menu.css';

const Menu = () => {
  return (
    <section>
      <Navbar />
        <header>
          <h1 className='menuHeader'>Menu</h1>
          <i>what we offer</i>
        </header>
      <section className='menu'>
        <section className='menuItems'>
          <h2>Entrees</h2>
          <section>
            <ul>
              <li>Chicken Nuggets - 4pc, 8pc, 12pc</li>
              <li>Fried Rice (chicken, pork, sausage, or combo) - sm, md, lg</li>
              <li>Hot Pocket (ham, bacon, chicken, pork, combo)</li>
              <li>Orange Chicken and White Rice - sm, md, lg</li>
              <li>Potato Log - sm, md, lg</li>
              <li>Rice Bowl (chicken, pork, sausage, ham, bacon, or combo)</li>
              <li>Tamales (pork, chicken, or combo) - 4pc, 8pc, 12pc</li>
              <li>Tacos (Hard/Soft shell) - Customizable</li>
              <li>Pizza (chicken, pork, sausage, ham, bacon, Pepperoni, or combo) - Personal Pan or Lg</li>
              <li>Breakfast Pizza (ham, sausage, bacon, or combo)</li>
              <li>Tostadas (chicken, pork, sausage, ham, bacon, Pepperoni, or combo) </li>
              <li>Pizza Rolls (chicken, pork, sausage, ham, bacon, Pepperoni, or combo) - 4pc, 8pc, 12pc </li>
              <li>Pork Balls - 4pc, 8pc, 12pc</li>
              <li>Cheese Balls (chicken, pork, sausage, ham, bacon, Pepperoni, or combo) - Mozzarella, cheddar, Hot pepper </li>
              <li>Chicken Alfredo - sm, md, lg</li>
              <li>Bacon wrapped Stuffed Pickels - 2pc, 4pc, 8pc</li>
            </ul>
          </section>
          <h2>Sides</h2>
          <section>
            <ul>
              <li>Egg Rolls - 4pc, 8pc, 12pc</li>
              <li>Mashed potatoes - sm, md, lg</li>
              <li>Sweet rice - sm, md, lg</li>
              <li>Biscuts - singles</li>
              <li>Bacon - 4pc, 8pc, 12pc</li>
              <li>Pop noodles - sm, md, lg</li>
              <li>Sweet noodles - sm, md, lg</li>
              <li>Lo Mein - sm, md, lg</li>
              <li>Mac & Cheese  - sm, md, lg</li>
              <li>Spanish Rice  - sm, md, lg</li>
              <li>Refried Beans  - sm, md, lg</li>
              <li>Chili Refried beans and rice  - sm, md, lg</li>
            </ul>
          </section>
          <h2>Desserts</h2>
          <section>
            <ul>
              <li>Cheese cake (Oreo, Strawberry, peanut butter, or regular) - sm, md lg</li>
              <li>Oreo Balls - 4pc, 8pc, 12pc</li>
              <li>Peanut Butter Balls - 4pc, 8pc, 12pc</li>
              <li>Taffy (Blue rasberry, peach, strawberry, grape, orange, or fruit punch)</li>
              <li>Cookie cake - sm, md, lg</li>
              <li>Fudge (Regular or Cherry)- sm, md, lg</li>
              <li>Brownie - sm, md, lg</li>
              <li>Peanut Brittle - regular or King sized</li>
              <li>Fluff - sm, md, lg</li>
              <li>Pop cake - sm, md, lg</li>
              <li>Lava cake - sm, md, lg</li>
              <li>Popcorn Balls - singles</li>
              <li>Jolly rancher Tootsie roll Suckers - singles</li>
              <li>Whip it - sm, md, lg</li>
              <li>Chocolate Chip Cookies</li>
              <li>No bake Cookies</li>
            </ul>
          </section>
          <h2>Drinks</h2>
          <section>
            <ul>
              <li>Iced coffee (Caramel, or french vanilla) - sm, md, lg</li>
              <li>Coffee - sm, md, lg</li>
              <li>Smoothie (Blue rasberry, strawberry lemonade, peach, strawberry, grape, orange, or fruit punch) - sm, md, lg</li>
              <li>Milk shake (Oreo, butterscotch, strawberry, vanilla, or chocolate) - sm, md, lg</li>
              <li>Kool-aid (Flavor of the day) - sm, md, lg</li>
              <li>Fountain Drink (Soda) - sm, md, lg</li>
              <li>Iced tea - sm, md, lg</li>
              <li>Lemonade - sm, md, lg</li>
              <li>Fruit Cocktail - sm, md, lg</li>
              <li>Orange Juice - sm, md, lg</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Menu