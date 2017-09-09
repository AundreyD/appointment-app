
import {SET_DATE, SET_TABLE_ROWS, SET_DESC, SET_TIME} from '../actions/actions';

const defaultStore = {
    info:{
        date: '',
        desc: '',
        time: '',
        tableRows: []
    }
    };

export const info = (state = [], action) => {
    switch (action.type){
        case SET_DATE:
            return {
                ...state,
                date: action.date
            }
        case SET_TIME:
            return {
                ...state,
                time: action.time
            }
        case SET_DESC:
            return {
                ...state,
                desc: action.desc
            }
        case SET_TABLE_ROWS:
            return {
                ...state,
                tableRows: action.arr
            }
        default:
            return state;
    }
}