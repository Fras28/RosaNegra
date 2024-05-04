import React from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Bebidas.css";
import { jsonCafe } from "../json";
import { Nav } from "../Nav/Nav.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";

export const Bebidas = (id) => {
  const mesa = id.match.url.slice(1,3)


  
  const Cafex = jsonCafe.filter((e) => e.section === "SIN ALCOHOL");
  const CafeEspecial = jsonCafe.filter((e) => e.section === "CERVEZA");
  const Infusionesx = jsonCafe.filter((e) => e.section === "COCTELERIA CLASSICA");
  const ColdBrew = jsonCafe.filter((e) => e.section === "COCTELERIA ESPECIAL");


  return (
    <div className="containerL">
    <Nav id={mesa} />
    <div className="sectioner">
      <a href="#1">Sin alcohol</a>
      <a href="#2">Cerveza</a>
      <a href="#3">Cocteleria clasica</a>
      <a href="#4">Cocteleria especial</a>

    </div>
    <div className="conteinerLC">
      <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="1"
        />
        <Cards products={Cafex} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="2"
        />
        <Cards products={CafeEspecial} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="3"
        />
        <Cards products={Infusionesx} />
        <img
          src="https://cdn.shopify.com/s/files/1/0613/6342/1411/files/a_900x900.png?v=1669254768"
          alt="promo"
          id="4"
        />
        <Cards products={ColdBrew} />
      </div>
    </div>
<VerPedido id={mesa} />
  </div>
  );
};
