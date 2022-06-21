var API_URL = 'https://t2009m1-boot.herokuapp.com/api/v1/products';

function getParameterFromUrl(name){
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get(name);
}