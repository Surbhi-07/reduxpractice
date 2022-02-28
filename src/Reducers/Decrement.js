const initialState=20;
const Decrement= (state=initialState,action)=>{
    switch(action.type){
        case 'DECREMENT':
            return state-action.playload;
            default:
                return state;
             
    }
}
export default Decrement;