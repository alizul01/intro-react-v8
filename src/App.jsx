import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" breed="Havanese" animal="dog" />
    <Pet name="Pepper" breed="Cockatiel" animal="bird" />
    <Pet name="Doink" breed="Mixed" animal="cat" />
  </div>;
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);