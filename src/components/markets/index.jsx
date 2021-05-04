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
import { Pagination } from '@material-ui/lab';

import { getCoinMarkets, listAllCoins } from '../../api/coins';
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
    const [params, setParams] = useState(coin_market_get_params);
    const [page, setPage] = useState(coin_market_get_params.page);
    const [allCoins, setAllCoins] = useState(100);

    const onPageChange = (event, newPage) => {
        params.page = newPage;
        let newParams = Object.assign({}, params);
        setParams(newParams);
        setPage(newPage);
    }

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        getCoinMarkets(params).then((response) => {
            setLoading(false);
            if (isMounted && response.data && response.status === 200) {
                setMarkets(response.data);
            }
        }).catch((error) => {
            setLoading(false);
            console.error(error);
        });
        return () => { isMounted = false }
    }, [params]);

    useEffect(() => {
        let isMounted = true;
        listAllCoins().then((response) => {
            setLoading(false);
            if (isMounted && response.data && response.status === 200) {
                setAllCoins(response.data.length);
            }
        }).catch((error) => {
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
                                        <Link href={row.id} className={classes.link}>
                                            <Grid container alignItems="center">
                                                <Grid container item md={2} xs={3} >
                                                    <Avatar alt="Coin image" src={row.image} className={classes.avatar} />
                                                </Grid>
                                                <Grid container item md={10} xs={9} >
                                                    <Grid item md={6} xs={12} className={classes.coinName}> {row.name}</Grid>
                                                    <Grid item md={6} xs={12}><Chip className={classes.chipSymbol} size="small" label={row.symbol.toUpperCase()} /></Grid>
                                                </Grid>

                                            </Grid>
                                        </Link>
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
            {!isLoading &&
                <Grid container justify="center" className={classes.pagination}>
                    <Pagination count={Math.round(allCoins/coin_market_get_params.per_page)} onChange={onPageChange} page={page} />
                </Grid>
            }
        </>
    );
}