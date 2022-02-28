const initialState =0;
const Increment= (state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+action.playload;
            default:
                return state;
             
    }
}
export default Increment;