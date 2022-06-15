import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"
// const APIKEY = process.env.APIKEY
// const holi = process.env.REACT_APP_API_URL 



const initialState = {
  news: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    // console.log("aquiiiiiiiiiiiiiiiiiiiiiiiiiii",holi)
    let url='https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=hPvzPb8ldJH83JIhA1raARVyXGCWAms5'
    const result = await axios.get(url);
    dispatch({
      type: "GET_NEWS",
      payload: result.data.results 
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children} {/* children son mis componentes hijos */}
    </GlobalContext.Provider>
  );
};