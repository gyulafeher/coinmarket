import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    rootContainer: {
        padding: theme.spacing(1),
        backgroundColor: "lightgrey",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    },
}));

export default useStyles;
