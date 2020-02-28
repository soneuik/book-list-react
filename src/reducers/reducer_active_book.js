//State argument is not application stte, only the state
//this reducer is responsible for
export default function(state = null, action){
    // 리덕스리듀서는 대부분 자바스크립트를 쓴다.

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;  
    }
 
    return state; 
}