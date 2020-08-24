import {makeStyles} from "@material-ui/core/styles";

export const useStyle = makeStyles({
    todoForm: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '300px',
    },
    todoFormBtn: {
        marginTop: '5px',
        width: '100%',
    },
    todoFormInput: {
        width: '100%',
    }
});
