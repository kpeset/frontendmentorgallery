import "./App.css";

const shoes = {
  brand: "Sneaker Company",
  model: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
  pictures: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
};

function App() {
  console.info(shoes);

  return (
    <>
      <h1>Voici ce que vous devez coder !</h1>
      <h2>Ceci est une maquette bien entendu !!!!</h2>
      <img src="/image.png" alt="maquette" />
      <p>
        Bien sur vous devez supprimer le code du return ! Et mettre votre
        nouveau code à sa place !
      </p>
      <p>Par contre supprimez pas l'objet shoes ! Évidemment !</p>
    </>
  );
}

export default App;
