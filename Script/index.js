// localStorage.setItem("data",JSON.stringify([{name:"hello word"}]))


// var data =JSON.parse(localStorage.getItem("data"))
// console.log(typeof data)


// $('.btn_add').on("click",function(event){    
    // event.preventDefault()
    // $('.btn').attr("disabled", true);
    //  var title = $('#title_book').val()
    // var img = $('#img').val()
    // var author = $('#author').val()
    // var price = $('#price').val()
    // var genre = $('#genre').val()
    // var description = $('#description').val()
    
    // localStorage.setItem("book",JSON.stringify({title:title})) 
//     event.preventDefault();
//     event.stopPropagation()
//     alert( "Handler for `submit` called." );
// })
     var urlString = window.location.href; // Get the full URL
    var url = new URL(urlString);
    var params = new URLSearchParams(url.search);
    console.log("ssssssssssssssssssss",params)
   var title =params.get("title_book")
      var img =params.get("img")
    // var author = $('#author').val()
    // var price = $('#price').val()
    // var genre = $('#genre').val()
    // var description = $('#description').val()
   console.log("title",params.entries());
   var book={title:title}
   
    // for (var key in all){
    //     console.log(key)
    // }
