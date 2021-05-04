import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Chip,
    Divider,
    Grid,
    Link,
    Paper,
} from '@material-ui/core';
import { getCoin } from '../../api/coins';
import { useParams } from "react-router-dom";
import useStyles from './style';
import LoadingTemplate from '../../helpers/loadingTemplate1';

/**
 * Coins component, displays specific coin based on id from url parameter
 * @version 1.0.0
 * @author [Gyula Fehér](https://github.com/gyulafeher)
 */
export default function Coins() {
    const classes = useStyles();
    const [coin, setCoin] = useState([]);
    const [success, setSuccess] = useState(true);
    const [isLoading, setLoading] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        getCoin(id).then((response) => {
            setLoading(false);
            if (isMounted && response.data && response.status === 200) {
                setCoin(response.data);
            } else {
                setSuccess(false);
                setCoin(response.response.data.error);
            }
        }).catch((error) => {
            setLoading(false);
            setSuccess(false);
            setCoin(error.response.data.error);
            console.error(error);

        });
        return () => { isMounted = false }
    }, [id]);

    return (
        <>
            <h1 className={classes.h1} >Coins</h1>
            <Paper className={classes.paper}>
                {(isLoading || Object.keys(coin).length === 0) &&
                    <LoadingTemplate />
                }
                {(!isLoading && Object.keys(coin).length !== 0 && success) &&
                    <Grid container >
                        <Grid item md={6} xs={12}>
                            <Grid container alignItems="center">
                                <Avatar alt="Coin Image" src={coin.image.thumb} className={classes.small} />
                                <h2 className={classes.coinName}>{coin.name}</h2>
                                <Chip size="small" label={coin.symbol.toUpperCase()} />
                            </Grid>
                        </Grid>
                        <Grid container item md={6} xs={12} className={classes.informationGrid} alignItems="center">
                            <Link href={coin.links.homepage[0]} target="_blank" rel="noreferrer">{coin.links.homepage[0]}</Link>
                        </Grid>
                        <Grid className={classes.detailsGrid} item xs={12}>Details</Grid>
                        <Divider className={classes.divider} />
                        <Grid item className={classes.informationGrid}>
                            <Grid className={classes.label}>Hashing algorithm</Grid>
                            <Grid className={classes.information}>{coin.hashing_algorithm ? coin.hashing_algorithm : "Unknown"}</Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.informationGrid}>
                            <Grid className={classes.label}>Market cap in Euro</Grid>
                            <Grid className={classes.information}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(coin.market_data.market_cap.eur)}</Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.informationGrid}>
                            <Grid className={classes.label}>Genesis Date</Grid>
                            <Grid className={classes.information}>   {coin.genesis_date ? coin.genesis_date : "Unknown"}</Grid>
                        </Grid>
                        <Divider className={classes.divider} />
                        <Grid item xs={12} className={classes.descriptionGrid}>
                            <Grid className={classes.label}>
                                Description
                            </Grid>
                            <Grid className={classes.descriptionText}
                                dangerouslySetInnerHTML={{ __html: coin.description.en }}>
                            </Grid>
                        </Grid>

                    </Grid>
                }
                {!success && <Grid container >
                    {coin}
                </Grid>
                }
            </Paper>
        </>
    );
}