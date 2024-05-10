import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/ElMundoParrilla-removebg-preview (2).png"
import Carousel from "../assets/Carousel/Carousel";
import Morton from "../assets/PlaceHolder.jpg"
const API = process.env.REACT_APP_API_STRAPI;
export const Inicio = (url) => {
  const dispatch = useDispatch();
  const { comercio } = useSelector((state) => state.alldata);
  const [animateOut, setAnimateOut] = useState(false);

  // </svg>

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  toTop();

  const handleButtonClick = () => {
    // Realiza la lógica necesaria antes de la redirección
    setAnimateOut(true);

    // Espera un tiempo suficiente para que la animación ocurra antes de redirigir
    setTimeout(() => {
      url.history.push(`${url.location.pathname}/Landing`);
    }, 500); // Ajusta este tiempo según la duración de la animación
  };

  if (url.location.pathname === "/") {
    url.location.pathname = "/sinMesa";
    console.log(url.location.pathname);
  }

  const Logos = [Morton,Morton,Morton,Morton,Morton,Morton,Morton]

  return (
    <div
      className={`LandingBack ${
        animateOut ? "animate__animated animate__slideOutUp" : ""
      }`}
    >
      <div className="landingStart">
        <div >
          {" "}
          <p
            className="titleSectionStart"
            style={{
              justifyContent: "center",
              outline: "solid white 2px",
              border: "none",
              backgroundColor:`${comercio?.attributes?.rgb}`,
            }}
          >
            {"Contamos con opción de productos Sin T.A.C.C. En caso de que lo necesites, por favor indicarlo al momento de ordenar."}
          </p>{" "}
        </div>
        <div className="BottomLanding">
          <img
            src={Logo}
            alt=""
            style={{ maxWidth: "70%", margin: "auto", paddingTop:"2rem" }}
          />
          {comercio?.attributes?.presentacion != null ? (
            <div className="contAlerStart">
              <AlertDialogSlide />
            </div>
          ) : null}

          <div className="btnEnter" onClick={handleButtonClick}>
            {/* <ButtonEnter titulo="Ver Catalogo" /> */}
            <button className="Btn2" style={{fontSize:"20px"}} >Ver Carta</button>
          </div>

            <Carousel logos={Logos} maxWidth="100%"/>

          <div className="btnEnter2">
          <a
              className="Btn2"
              href={comercio?.attributes?.gps}
              target="_blank"
            >📍Av.Colón 379</a>
          </div>
        </div>
        <Link to="/Comander" className="buttonComander">
          Ir a Comander
        </Link>
      </div>
    </div>
  );
};
