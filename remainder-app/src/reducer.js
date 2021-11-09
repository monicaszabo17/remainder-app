import { ActionTypes } from './actions';
import { useEffect } from 'react';

const initialState = {
    timer: null
}

export const displayAlertAsync = ((type, timer) => (dispatch, getState)=>{
    if(type === ActionTypes.displayAlertAsync){
        useEffect(() => {
            const timer = setTimeout(() => {
                window.alert('It works!');
        }, 120000);
        return ()=> clearTimeout(timer);
    }, []);

       
    }
}

 const RemainderReducer = (state = initialState, action) => {

    switch(action.type){
        case ActionTypes.startTimer:{
            return{
                ...state,
                timer: state.timer + 1
            }
        }
        case ActionTypes.stopTimer:{
            return {
                ...state,
                count:null
            }
        }
        case ActionTypes.displayAlertAsync:{

        }
        default: {
            console.log('default executed');
            return state;
        }
    }

}


export default RemainderReducer;

