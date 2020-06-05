

let initialState = {
    currentPage:0,
    deg:360
}

export const mainReducer = (state=initialState, action)=>{
    switch(action.type){
        case "HOME": return {...state, deg:360, currentPage:0}
        case "ABOUT": return {...state, deg:270, currentPage:1}
        case "WORK": return {...state, deg:180, currentPage:2}
        case "CONTACT": return {...state, deg:90, currentPage:3}
        case "SLIDE_PAGE": return {...state, deg:action.deg, currentPage:action.currentPage}
        default: return state 
    }

}


export const setPageAC = (action)=>{
    return {type:action}
}
export const setSlidePage = (deg, currentPage) =>{
    return{type:"SLIDE_PAGE", deg, currentPage}
}