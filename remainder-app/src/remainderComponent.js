import React from 'react';
import { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from './actions';
//import { displayAlertAsync } from './reducer';
import styles from './remainder.css';

function Remainder (props) {
   
    const {  startTimer, stopTimer } = props;
    const[timer, setTimer]=useState(0);

    return (
        <div  className={styles.container}> 
                <div  className={styles.timer}>
                   <span>{timer}</span>
                </div>
                <button
                    className={styles.button}
                    aria-label="Add-seconds"
                    onClick={() => {startTimer; setTimer(timer + 1)}
                >
                    Start timer
                </button>
                <button
                    className={styles.button}
                    aria-label="Clear-seconds"
                    onClick={stopTimer}
                >
                    Stop timer
                </button>
        </div>
            )
}

const mapStateToProps = (state) =>{
    return{
        timer: state.remainder.timer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        startTimer: () => dispatch({type: ActionTypes.startTimer}),
        stopTimer: () => dispatch({type: ActionTypes.stopTimer}),
        displayAlertAsync: () => dispatch({type: ActionTypes.displayAlertAsync})
        
    }
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(Remainder);
