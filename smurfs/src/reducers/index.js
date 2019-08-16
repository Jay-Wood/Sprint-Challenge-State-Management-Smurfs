import {
    FETCH_DATA_START, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE,
    ADD_POST 
} from "../actions";

const initialState = {
    smurfs: [],
    isLoading: false, 
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_DATA_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: "",
                smurfs: action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state, 
                // isLoading: false, 
                error: action.payload
            }
        case ADD_POST: 
            return[
                ...state,
                action.payload
            ]
        // case POST_DATA_SUCCESS:
        //     return{}

        // case POST_DATA_FAILURE:

        default: return state;
    }
}


