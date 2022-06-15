import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"
require("dotenv").config();
const APIKEY = process.env.APIKEY 

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
      payload: result.data.results, //res.data.results = array de personajes
    });
  };
  return (
    <GlobalContext.Provider
      value={{news,
        getNews,
      }}
    >
      {children} {/* children son mis componentes hijos */}
    </GlobalContext.Provider>
  );
};