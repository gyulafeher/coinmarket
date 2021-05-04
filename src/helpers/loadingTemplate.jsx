import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

/**
 * Loading template component with circle and text
 * @author [Gyula Fehér](https://github.com/gyulafeher)
 */
export default function LoadingTemplate() {

    return (
        <Grid container alignItems="center">
            <Skeleton variant="circle"
                width={40} height={40}
            />
            <Skeleton variant="text" width="80%" />
        </Grid>
    );
}