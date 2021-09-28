import React, {createContext, useState} from "react";
import "./App.css";

// if No Provider, Consumer use default value
const {Provider:LangProvider, Consumer:LangConsumer} = createContext ("en")
const {Provider:ThemeProvider, Consumer:ThemeConsumer} = createContext ("en")

function LangPage() {
  const [lang, setLang] = useState("🇮🇩")
  const changeLang = e => setLang(e.target.value)
  const langState = {lang, changeLang}

  const [theme, setTheme] = useState("🇮🇩")
  const changeTheme = e => setTheme(e.target.value)
  const themeState = {theme, changeTheme}


  return (
      <LangProvider value={langState}>
        <ThemeProvider value={themeState}>
          <Header />
          <Content />
          <Footer />
        </ThemeProvider>
      </LangProvider>
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
    <LangConsumer>
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
    </LangConsumer>
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
    <LangConsumer>
      {
        props => (
          <>
          <i>-- Footer --</i>
          <p>Languange : {props.lang}</p>
          </>
        )
      }
    </LangConsumer>
  );
}

export default LangPage;
