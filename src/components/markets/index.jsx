import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Chip,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link
} from '@material-ui/core';
import { getCoinMarkets } from '../../api/coins';
import { coin_market_get_params } from '../../config/apiParameters';
import useStyles from './style';
import LoadingTemplate from '../../helpers/loadingTemplate';

/**
 * Markets component,  displays list of coins using api response
 * @author [Gyula Fehér](https://github.com/gyulafeher)
 */
export default function Markets() {
    const classes = useStyles();
    const [markets, setMarkets] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        getCoinMarkets(coin_market_get_params).then((response) => {
            setLoading(false);
            if (isMounted && response.data && response.status === 200) {
                setMarkets(response.data);
            }
        }).catch((error) => {
            setLoading(false);
            console.error(error);
        });
        return () => { isMounted = false }
    }, []);

    return (
        <>
            <h1 className={classes.h1}>Today's Cryptocurrency Prices by Market Cap</h1>
            <TableContainer component={Paper}>
                {isLoading &&
                    <>
                        <LoadingTemplate />
                        <LoadingTemplate />
                        <LoadingTemplate />
                    </>
                }
                {!isLoading &&
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    className={classes.tableHead}
                                ><strong>Name</strong></TableCell>
                                <TableCell align="right"><strong>Current Price</strong></TableCell>
                                <TableCell align="right"><strong>High 24 hour Price</strong></TableCell>
                                <TableCell align="right"><strong>Low 24 hour Price</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {markets.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        className={classes.tableHead}
                                    >
                                        <Grid container alignItems="center">
                                            <Avatar alt="Coin image" src={row.image} className={classes.small} />
                                            <Grid className={classes.coinName}> {row.name}</Grid>
                                            <Chip size="small" label={row.symbol.toUpperCase()} />
                                        </Grid>
                                    </TableCell>
                                    <TableCell align="right">{row.current_price}</TableCell>
                                    <TableCell align="right">{row.high_24h}</TableCell>
                                    <TableCell align="right">{row.low_24h}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
            </TableContainer>
        </>
    );
}