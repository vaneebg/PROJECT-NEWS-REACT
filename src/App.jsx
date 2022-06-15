import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'
import { GlobalProvider } from "./context/GlobalState";
import Footer from './components/Footer/Footer';



const App=()=> {
  return (
    <div className="App">
<BrowserRouter>
     <GlobalProvider>
          <Header/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/listNews" element={<ListNews />} />
          </Routes>
          <Footer />
      </GlobalProvider>
</BrowserRouter>
    </div>
  );
}

export default App;
