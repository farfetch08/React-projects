import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const pizzaData = [
//     {
//       name: "Focaccia",
//       ingredients: "Bread with italian olive oil and rosemary",
//       price: 6,
//       photoName: "pizzas/focaccia.jpg",
//       soldOut: false,
//     },
//     {
//       name: "Pizza Margherita",
//       ingredients: "Tomato and mozarella",
//       price: 10,
//       photoName: "pizzas/margherita.jpg",
//       soldOut: false,
//     },
//     {
//       name: "Pizza Spinaci",
//       ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//       price: 12,
//       photoName: "pizzas/spinaci.jpg",
//       soldOut: false,
//     },
//     {
//       name: "Pizza Funghi",
//       ingredients: "Tomato, mozarella, mushrooms, and onion",
//       price: 12,
//       photoName: "pizzas/funghi.jpg",
//       soldOut: false,
//     },
//     {
//       name: "Pizza Salamino",
//       ingredients: "Tomato, mozarella, and pepperoni",
//       price: 15,
//       photoName: "pizzas/salamino.jpg",
//       soldOut: true,
//     },
//     {
//       name: "Pizza Prosciutto",
//       ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//       price: 18,
//       photoName: "pizzas/prosciutto.jpg",
//       soldOut: false,
//     },
//   ];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
        soldOut={true}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
        soldOut={false}
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price+3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // console.log(hour);
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour>=12 && hour<=22;
  // console.log(isOpen);

  return (
    <footer className="footer">
      ({new Date().toLocaleTimeString()}) We're open until 22:00. Come visit us
      or order online.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
