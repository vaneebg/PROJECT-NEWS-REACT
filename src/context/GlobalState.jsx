import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"
const APIKEY = process.env.REACT_APP_APIKEY


const initialState = {
  news: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    let url=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${APIKEY}`
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
      {children} 
    </GlobalContext.Provider>
  );
};