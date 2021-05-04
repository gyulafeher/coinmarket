import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    coinName: {
        margin: theme.spacing(0, 2),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2.5),
        }
    },
    detailsGrid: {
        fontWeight: "bold",
        marginTop: theme.spacing(4),
    },
    descriptionGrid: {
        margin: theme.spacing(2, 0)
    },
    descriptionText: {
        paddingTop: theme.spacing(2)
    },
    divider: {
        width: "100%",
    },
    h1: {
        fontSize: "1.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
        }
    },
    information: {
        fontWeight: "bold",
        fontSize: "1.3em",
        marginTop: 8
    },
    informationGrid: {
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(4)
    },
    label: {
        color: "#58667e",
        fontWeight: "bold",
    },
}));

export default useStyles;
