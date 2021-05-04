import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    coinName: {
        padding: theme.spacing(0, 1)
    },
    h1: {
        fontSize: "1.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
        }
    },
    table: {
        minWidth: 500,
    },
    tableHead: {
        position: "sticky",
        zIndex: "100",
        left: 0,
        backgroundColor: "white"
    }
}));

export default useStyles;
