import { useContext, useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact/ContactForm";
import Intro from "./components/introduction/Intro";
import Landing from "./components/landing/Landing";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Toggle/> */}
      <Landing />
      {/* <Intro/> */}
      <About />
      <Skills />
      <ProductList />
      <ContactForm />
      {/* <Contact/> */}
    </div>
  );
};

export default App;
