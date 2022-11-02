import { HANDLE_PAGE, HANDLE_SEARCH, SET_STORIES, HANDLE_DELETE } from "./actions";

const reducer = (state, action) => {
    switch(action.type){
        case SET_STORIES:
            return {...state, hits: action.payload.hits, nbPages: action.payload.nbPages};
        case HANDLE_DELETE:
            return {...state, hits: state.hits.filter(item => item.objectID !== action.payload)};
        case HANDLE_SEARCH:
            return {...state, term: action.payload, page: 0};
        case HANDLE_PAGE:
            if(action.payload === "dec"){
                let newPage = state.page - 1;
                if(newPage < 0){
                    newPage = state.nbPages - 1;
                }
                return {...state, page: newPage}
            }
            else if(action.payload === "inc"){
                let newPage = state.page + 1;
                if(newPage > state.nbPages - 1){
                    newPage = 0;
                }
                return {...state, page: newPage}
            }
            return state;
        default:
            throw new Error(`There is no action for this ${action.type} action type`);
    }
}

export default reducer


//             let newPage = 0;
//             if(action.payload === "dec"){
//                 if(state.page === 0){
//                     return {...state, page: state.nbPages - 1}
//                 }
//                 newPage = state.page - 1;
//             }
//             else if(action.payload === "inc"){
//                 if(state.page === state.nbPages - 1){
//                     return {...state, page: 0}
//                 }
//                 newPage = state.page + 1;
//             }
//             return {...state, page: newPage};