import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import useFetch from "./useFetch";
import { HANDLE_PAGE, HANDLE_SEARCH, SET_STORIES, HANDLE_DELETE } from "./actions";

const AppContext = React.createContext();

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    hits: [],
    page: 0,
    nbPages: 0,
    term: "react"
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data, loading, err} = useFetch(`${API_ENDPOINT}query=${state.term}&page=${state.page}`);
    
    useEffect(() => {
        if(data){
            dispatch({type: SET_STORIES, payload: data})
        }
    }, [data])

    const hadleDelete = id => dispatch({type: HANDLE_DELETE, payload: id});
    const handleSearch = value => dispatch({type: HANDLE_SEARCH, payload: value});
    const handlePage = math => dispatch({type: HANDLE_PAGE, payload: math});

    return (
        <AppContext.Provider value={{...state, loading, err, hadleDelete, handleSearch, handlePage}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export {AppProvider, useGlobalContext};