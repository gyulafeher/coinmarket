import React from 'react';
import { Skeleton } from '@material-ui/lab';

/**
 * Loading template component with rect and text
 * @author [Gyula Fehér](https://github.com/gyulafeher)
 */
export default function LoadingTemplate() {

    return (
        <>
            <Skeleton variant="rect" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
        </>
    );
}