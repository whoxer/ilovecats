import "./Home.css";
import caticon from "./images/animal.png";
import spinningcat from "./images/maxwell-cat-spin.gif"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="screen">
      <div className="bar">
        <div className="iconcontainer">
          <img src={caticon} className="caticon" alt="Ícone de novelo de lã" />
          <span className="lovecats">I ❤️ Cats</span>
        </div>

        <div className="buttonscontainer">
          <Link to={"#"}>
            <button className="barbutton">📺 Gato TV </button>
          </Link>
          <Link to="#">
            <button className="barbutton">📒 Gato Quiz</button>
          </Link>
          <Link to={"#"}>
            <button className="barbutton">😼 Gatos Irados</button>
          </Link>
        </div>
      </div>

      <div className="homepagedecor">
        <div className="hpdecorcontainer">
          <img
            className="cat-image"
            src={spinningcat}
            alt="Gato Maxwell do meme Gato giratório ou Spinning Cat"
          />

          <div className="introtxt">
            <h1 className="titulo">Bem vinda(e)(o) ao I ❤️ Cats!</h1>
            <p className="text">
              Oi, meu nome é Nat, isso é um fork de um repositório de uma amiga
              muito querida minha! Orgulhosamente ela criou o icônico{" "}
              <a href="https://ilovefloppa.vercel.app/" className="yellow">
                I Love Floppa
              </a>
              , e eu inspirado nela decidi criar esse divertido site. Espero que
              gostem dele tanto quanto gostaram do da minha amiga{" "}
              <a href="https://github.com/vivalaclara" className="yellow">
                Clara
              </a>
              !
            </p>
          </div>
        </div>
        <div className="curiosidades">
          <h1 className="titulo">Você sabia 🤔👀🔍?!</h1>
          <h3 className="titulo">Gatos dominam o YouTube 🔍😻:</h3>
          <p className="text">
            Os vídeos de gatos estão entre os mais populares na internet. Desde
            o início do YouTube, vídeos de gatos têm um apelo universal, com os
            vídeos de gatos fofos, engraçados ou travessos acumulando milhões de
            visualizações. Um dos vídeos mais icônicos é o "Nyan Cat", uma
            animação de um gato-pão voando com uma trilha sonora viciante.
          </p>

          <h3 className="titulo">"Maru", o gato das caixas 🔍😻:</h3>
          <p className="text">
            Maru, um gato japonês que adora se espremer em pequenas caixas, se
            tornou uma das celebridades felinas mais famosas da internet. Ele é
            conhecido por seus vídeos onde tenta entrar em caixas de todos os
            tamanhos e formatos, e tem milhões de seguidores ao redor do mundo.
          </p>

          <h3 className="titulo">
            "Keyboard Cat" virou um meme clássico 🔍😻:
          </h3>
          <p className="text">
            Um dos primeiros memes virais envolvendo gatos foi o "Keyboard Cat",
            um vídeo de um gato "tocando" teclado com uma música animada ao
            fundo. Esse vídeo, gravado nos anos 80, foi redescoberto na era da
            internet e ganhou popularidade mundial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
