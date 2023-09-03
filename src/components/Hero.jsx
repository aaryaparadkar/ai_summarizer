import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full items-center ">
      <nav
        className="flex justify-evenly flex-col  items-center w-full  pt-3"
        style={{ height: "400px" }}
      >
        {/* img */}
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        {/* button */}
        <button
          type="button"
          onClick={() => window.open("https://github.com/aaryaparadkar")}
          className="black_btn"
        >
          Github
        </button>

        {/* heading */}
        <h1 className="head_text">
          Summarize your article's with <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAI's GPT-4 Model</span>
        </h1>

        {/* description */}
        <h2 className="desc">
          Simplify your reading with Sumz, an AI summarizer that summarizes your
          article without losing it's original meaning.
        </h2>
      </nav>
    </header>
  );
};

export default Hero;
