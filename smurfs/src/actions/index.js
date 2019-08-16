import axios from "axios";

export const FETCH_DATA_START = "FETCHING_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_POST = "ADD_POST";
// export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
// export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const getSmurfData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_DATA_START});
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                console.log("response: ", res)
                dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log("Error: ", err)
                dispatch({type: FETCH_DATA_FAILURE, payload: err})
            })
    }
}

export const postSmurfData = ({name, age, height}) => {
    return (dispatch) => {
        return axios.post("http://localhost:3333/smurfs", { name, age, height })
        .then(response => {
            dispatch(postSuccess(response.data))
        })
        .catch(err => {
            console.log("post err:", err)
        })
    }
}

export const postSuccess = (data) => {
    return {
      type: ADD_POST,
      payload: {
        _id: data._id,
        name: data.name,
        age: data.age,
        height: data.height
      }
    }
  };