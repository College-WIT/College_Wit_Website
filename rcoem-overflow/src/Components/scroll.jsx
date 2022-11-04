import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./styles";
import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 10%;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: "#364156";
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp
        style={{
          color: "#F4442E",
        }}
      />
    </Button>
  );
};

export default ScrollButton;
