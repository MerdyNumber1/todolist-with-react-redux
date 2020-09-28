import {GET_TASKS} from "./actions";
import initState from "./initState"; 

export default (state = initState, action) => {
    switch(action.type) {
        case GET_TASKS:
            return {
                tasks: action.payload,
            };

        default:
            return state;
    }
};
