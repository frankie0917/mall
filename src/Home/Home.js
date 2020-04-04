import React from "react";
import { Main, Box, Text } from "grommet";
import { Home as HomeIcon } from "grommet-icons";
import "./Home.css";
import Glider from "../Glider/Glider";

export default function Home() {
  return (
    <Main>
      <NavBar />
      <div className="container">
        <Glider
          children={[
            <div className="tmpSlide" style={{ background: "#fec7d7" }}>
              <span>1</span>
            </div>,
            <div className="tmpSlide" style={{ background: "#d9d4e7" }}>
              <span>2</span>
            </div>,
            <div className="tmpSlide" style={{ background: "#a786df" }}>
              <span>3</span>
            </div>,
            <div className="tmpSlide" style={{ background: "#D28579" }}>
              <span>4</span>
            </div>
          ]}
        />
      </div>
      <div className="container">
        <Box>
          <Text alignSelf="center" color="black" textAlign="center" weight="bold" size="xlarge">
            --- 新品推荐 ---
          </Text>
        </Box>
        <Glider
          options={{
            perView: "3",
            type: "carousel",
            autoplay: 2000
          }}
          children={[
            <div className="tmpSlideRec" style={{ background: "#fec7d7" }}>
              <span>1</span>
            </div>,
            <div className="tmpSlideRec" style={{ background: "#d9d4e7" }}>
              <span>2</span>
            </div>,
            <div className="tmpSlideRec" style={{ background: "#a786df" }}>
              <span>3</span>
            </div>,
            <div className="tmpSlideRec" style={{ background: "#D28579" }}>
              <span>4</span>
            </div>,
            <div className="tmpSlideRec" style={{ background: "#d9d4e7" }}>
              <span>5</span>
            </div>,
            <div className="tmpSlideRec" style={{ background: "#a786df" }}>
              <span>6</span>
            </div>
          ]}
        />
      </div>
    </Main>
  );
}

const NavBar = () => (
  <Box
    background="main"
    pad="1rem"
    direction="row"
    alignContent="center"
    gap="1rem"
  >
    <div className="container">
      <NavLink icon={<HomeIcon color="black" />} text="Home" />
    </div>
  </Box>
);

const NavLink = props => (
  <a href="#" className="NavLink">
    {props.icon}
    <span>{props.text}</span>
  </a>
);
