import "./Bar.css"
import caticon from "../images/animal.png";
import { Link } from "react-router-dom";


const Bar = () => {
    return (
      <div className="bar">
        <div className="iconcontainer">
          <img src={caticon} className="caticon" alt="Ícone de novelo de lã" />
          <span className="lovecats">I ❤️ Cats</span>
        </div>

        <div className="buttonscontainer">
          <Link to={"https://github.com/whoxer/ilovecats"}>
            <button className="barbutton">💾 Github do Projeto</button>
          </Link>
          <Link to={"#"}>
            <button className="barbutton">📺 Gato TV </button>
          </Link>
          <Link to={"#"}>
            <button className="barbutton">😼 Gatos Irados</button>
          </Link>
        </div>
      </div>
    );
}

export default Bar;