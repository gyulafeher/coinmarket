import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        [theme.breakpoints.down('sm')]: {
            height: "1.2em",
            width: "1.2em",
        }
    },
    chipSymbol: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.8em",
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    coinName: {
        padding: theme.spacing(0, 1)
    },
    h1: {
        fontSize: "1.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
        }
    },
    link: {
        '&:hover': {
            textDecoration: "none",
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
