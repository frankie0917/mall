import React, { useState, useEffect } from "react";
import "./Glider.css";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";
import { FormNext, FormPrevious } from "grommet-icons";

export default function Glider({
  element = 'glide'+ Math.floor(Math.random()*100),
  options = {
    perView: "1",
    type: "carousel",
    focusAt: 1,
    startAt: 1,
    autoplay: 3000
  },
  children
}) {
  const num = Math.random()
  const [glider] = useState(new Glide("." + element, options));
  useEffect(() => {
    glider.mount();

    console.log(num)
    return () => glider.destroy();
  }, []);
  return (
    <div className={element+' glide'}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, i) => {
            return (
              <li className="glide__slide" key={i}>
                {slide}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          <FormPrevious color="#ffffff" />
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          <FormNext color="#ffffff" />
        </button>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {children.map((slide, i) => {
          return (
            <button
              className="glide__bullet"
              key={i}
              data-glide-dir={`=${i}`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
