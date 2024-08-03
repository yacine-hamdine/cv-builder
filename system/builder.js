let data = localStorage.getItem("data");
data = JSON.parse(data);
console.log(data);
document.querySelector('#photo').setAttribute('src', data["photo"]["data"]);