import {makeStyles} from "@material-ui/core/styles";

export const useStyle = makeStyles({
    todoControlItem: {
        marginBottom: '5px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    todoControlItemText: {
        flexGrow: 1,
        wordBreak: 'break-word !important',
        paddingTop: '10px',
    },
    todoControl: {
        width: '285px',
        marginTop: '15px',
    }
});
