import { useEffect, useState } from "react";
import PageButtons from "./components/PageButtons";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";

const themeCol = localStorage.theme ? localStorage.theme : "";

function App() {
  const [theme, setTheme] = useState(themeCol);
 
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme])
  
  const handleTheme = () => {
    if(theme === "light-mode"){
      setTheme("dark-mode")
    } else {
      setTheme("light-mode")
    }
  }

  return (
    <div className="App containerBoot m-auto pTB-80">
      <div className="d-flex justify-end">
        <button className="btn btn-teal" onClick={handleTheme}>{theme === "light-mode" ? "Go Dark mode" : "Go Light mode"}</button>
      </div>
      <SearchForm />
      <PageButtons />
      <Stories />
    </div>
  );
}

export default App;
