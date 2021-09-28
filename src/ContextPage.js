import React, {createContext, useState} from "react";
import "./App.css";

// if No Provider, Consumer use default value
const {Provider, Consumer} = createContext ("en")

function LangPage() {
  const [lang, setLang] = useState("🇮🇩")
  const changeLang = e => setLang(e.target.value)
  const langState = {lang, changeLang}
  return (
      <Provider value={langState}>
        <Header />
        <Content />
        <Footer />
      </Provider>
  );
}

function Header() {
  return (
    <>
      <i>-- Header --</i>
      <Menu />
    </>
  );
}

function Menu() {
  console.log('menu render')
  return (
    <Consumer>
      {
        props => (
          <div>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>
                Languange
                <select value= {props.lang} onChange={props.changeLang}>
                  <option value="🇬🇧"> 🇬🇧 English </option>
                  <option value="🇮🇩"> 🇮🇩 Indonesia </option>
                </select>
              </li>
            </ul>
          </div>
        )
      }
    </Consumer>
  );
}

function Content() {
  console.log("content render");
  return (
    <>
      <i>-- Content --</i>
      <h3> 🤙 Hello React Context </h3>
    </>
  );
}

function Footer() {
  console.log("footer render")
  return (
    <Consumer>
      {
        props => (
          <>
          <i>-- Footer --</i>
          <p>Languange : {props.lang}</p>
          </>
        )
      }
    </Consumer>
  );
}

export default LangPage;
