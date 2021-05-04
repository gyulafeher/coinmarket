import axios from 'axios';
import { buildUrl } from '../utils/UrlBuilder';
import { apiEndpoints } from '../config/apiEndpoints';

/**
* List all supported coins price, market cap, volume, and market related data
* @param    {Object}  query 
* @return   {Object} api response
* documentation at https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets
*/

const getCoinMarkets = (query) => {

    return axios(buildUrl(apiEndpoints.coinmarkets, 'get', query))
        .then(response => {
            return response;
        })
        .catch(function (error) {
            // handle error
            return error;
        })

}

/**
* Get current data (name, price, market, ... including exchange tickers) for a coin
* @param    {String}  url 
* @return   {Object}  api response
* documentation at https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets
*/

const getCoin = (id) => {

    return axios(buildUrl(apiEndpoints.coins + id, 'get'))
        .then(response => {
            return response;
        })
        .catch(function (error) {
            // handle error
            return error;
        })

}



export { getCoinMarkets, getCoin };