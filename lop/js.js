var API_URL = 'https://java-register.herokuapp.com/api/v1/products';
function loadData(){
    var xmlHttpRequest = new xmlHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

        }
    }
    xmlHttpRequest.open('GET', API_URL);
    xmlHttpRequest.send();
}
document.addEventListener('DOMContentLoaded', function (){
    loadData();
})
