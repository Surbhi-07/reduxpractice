import axios from 'axios';



export const Increment= () =>{
    console.log('hey');
    return({
        type:"INCREMENT",
        playload:1
    })
}
export const Decrement= () =>{
    return({
        type:"DECREMENT",
        payload:1
    })
}
export const fetchUserRequest = () => {
    return {
        type: "FETCHUSERREQUEST"
    }
}

export const fetchUserSucess = (users) => {
    return {
        type: "FETCHUSERSUCCESS",
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: "FETCHUSERFAILURE",
        payload: error
    }
}
export const userapi = () => {
    return async dispatch => {
        try {
            dispatch(fetchUserRequest);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch(fetchUserSucess(response.data));
            console.log(response.data);
        }
        catch (error) {
            dispatch(fetchUserFailure(error.message));
        }
    }
}