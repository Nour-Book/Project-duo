var buttorder = document.getElementById('order');
      var dataArr=JSON.parse(localStorage.getItem("basket"))  
      console.log("data",dataArr);
      
// console.log(butt,'buu'); 
function order () {
    console.log("hh")
    window.location.href ="./indexH.html"
  };
  buttorder.onclick=order