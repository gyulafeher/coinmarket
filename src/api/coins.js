import axios from 'axios';
import { buildUrl } from '../utils/UrlBuilder';
import { apiEndpoints } from '../config/apiEndpoints';

/**
* List all supported coins price, market cap, volume, and market related data
* @param    {Array}  query 
* @return   {String} api response
* documentation at https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets
*/

const getCoinMarkets = (query) => {

    return axios(buildUrl(apiEndpoints.coinmarkets, 'get', query))
        .then(response => {
            return response;
        })
        .catch(function (error) {
            // handle error
            console.error(error);
        })

}


export { getCoinMarkets };