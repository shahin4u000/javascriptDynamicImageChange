
var shahin = document.getElementById('img1').addEventListener('click',picShow);
var lina = document.getElementById('img2').addEventListener('click',picShow);
var adrita = document.getElementById("img3").addEventListener('click',picShow);


function picShow() {

var idName= this.attributes['data-img'].value;
var img = document.querySelectorAll('img');

for (var i in img)
{
    img[i].className="hidden";
}
switch (idName) {

    case 'img1' :

        img[0].className ="display";
        break;
    case 'img2' :
        img[1].className ="display";
        break;
    case 'img3' :
        img[2].className ="display";
        break;


}


}