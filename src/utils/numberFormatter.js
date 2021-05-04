/**
* Use this to format price to be user friendlier
* @param    {String}  Currency 
* @param    {Integer} Value 
* @return   {string}  formatted price with currency
*/
const numberFormatter = (currency, value) => {

    let formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency }).format(value)

    return formattedPrice;
}


export { numberFormatter }