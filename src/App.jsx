import { useState } from "react";
import CabeceraComponent from "./components/CabeceraComponent";
import MenuComponent from "./components/MenuComponent";
import FooterComponent from "./components/FooterComponent";
import SerieComponent from "./components/SerieComponent";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const series = [
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang-theory.png" },
    { cod: 4, nom: "Stranger Things", cat: "Terror", img: "stranger-things.png" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
  ];

  return (
    <div className={theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <CabeceraComponent />
      <MenuComponent toggleTheme={toggleTheme} theme={theme} />
      <div className="container mt-3">
        <h1 className="border-bottom pb-3 mb-3">Series</h1>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.cod} className="col-md-4 mb-3">
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
