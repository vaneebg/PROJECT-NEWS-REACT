import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'

const App=()=> {
  return (
    <div className="App">
     <BrowserRouter>
          <Main/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/listNews" element={<ListNews />} />

          </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
