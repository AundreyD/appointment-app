export const SET_DATE = "SET_DATE";
export const SET_TIME = "SET_TIME";
export const SET_DESC = "SET_DESC";
export const SET_TABLE_ROWS = "SET_TABLE_ROWS";

export const setDate = (date) =>{
    return {type: SET_DATE, date}
}
export const setTime = (time) =>{
    return {type: SET_TIME, time}
}
export const setDesc = (desc) =>{
    return {type: SET_DESC, desc}
}
export const setTableRows = (arr) =>{
    return {type: SET_TABLE_ROWS, arr}
}

