import { apiEndpoints } from "../config/apiEndpoints";

/**
* Use this to create query as a string
* @param    {Object}  query as object
* @return   {String}  query as string
*/
const buildQuery = (parameters) => {
    return Object.keys(parameters)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]))
        .join('&');
}

/**
* Use this to obtain a url
* @param    {String}  path 
* @param    {Object}  parameters 
* @return   {String}  url 
*/
const buildUrlAndPath = (path, parameters) => {
    return apiEndpoints.base + path + (parameters ? ('?' + buildQuery(parameters)) : "");
}


/**
* Use this to return axios request
* @param    {String}  path 
* @param    {String}  method 
* @param    {Object}  parameters 
* @return   {Object}  api request object
*/
const buildUrl = (path, method, parameters = false) => {

    let axiosRequest = {
        method: method,
        url: buildUrlAndPath(path, parameters),
    }

    return axiosRequest;
}


export { buildUrl }