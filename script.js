//1. create an xhr object
var request=new XMLHttpRequest();
//step 2. Create a connection
request.open('GET','https://restcountries.com/v2/all',true);
//step 3. send a request
//push a api from client to server
request.send();
//step 4. once data sucessfully recieved from server
request.onload=function(){
    var data = JSON.parse(request.response)
        var res = data.filter((ele)=>ele.population<100000)
        console.log(res.map((ele)=>ele.name),"+",(res.map((ele)=>ele.population)))
}