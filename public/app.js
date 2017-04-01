var viewPhoto = function(){
 $.ajax({
  method:"GET",
  url:"/images"
 }).then(function(res){
  console.log(res);
  $('.left').empty();
  for(var i=0; i<res.length;i++){
   $('.left').append('<div class="box" style="height:max-content;"><img src="'+res[i].imageURL+'"><h1>'+res[i].imageTitle+'</h1><p>'+res[i].imageDesc+'<button onclick="deletePhoto('+res[i].imageId+')"><h5>X</h5></button><button onclick="updatePhoto('+res[i].imageId+')"><h5>E</h5></button></p></div>');
  }
 });
};
viewPhoto();
$('#imageForm').on('submit', function(e){
 e.preventDefault();
$.ajax({
  method: "POST",
  url: "/images",
  data: new FormData($(this)[0]),
  contentType: false,
  processData: false,
  enctype: 'multipart/form-data'
 }).then(function(res){
  postimage(res);
 });
});
var postimage = function(res){
 var data = {
  imageURL:"./imageUploads/"+res.filename,
  imageTitle: $('#imagetitle').val(),
  imageDesc: $('#description').val()
 };
 $.ajax({
  method:"POST",
  url: "/imagesDatabase",
  data: data
 }).then(function(res){
  viewPhoto();
 $('#imagetitle').val('');
 $('#description').val('');
 $('#filename').val('');
 });
};
var deletePhoto = function(imageId){
 $.ajax({
  method: "DELETE",
  url: "/images/"+imageId
 }).then(function(res){
  viewPhoto();
 });
};
var updatePhoto = function(imageId, imageURL, imageTitle, imageDesc){
  var updatedPhoto = {
    imageTitle: Title,
    imageDesc: Desc
  };
  console.log(updatedPhoto)
  $.ajax({
    method: "PUT",
    url: '/images/' + imageId,
    data: updatedPhoto
  }).then(function(res){
    viewPhoto();
  })
};



/*-----------------RICHARD-----------------*/

$("#loginbutton").on("click",function(){
  $("#popup").show(),$("#loginbutton").hide();
});
$("#regbutton").on("click",function(){
  $("#register").show(),$("#login").hide();
});
$("#logbutton").on("click",function(){
  $("#register").hide(),$("#login").show();
});
$("#close").on("click",function(){
  $("#popup").hide(),$("#loginbutton").show();
});
/*-----------------RICHARD-----------------*/



/*-------------------------------------------------

$('#imageForm').on('submit', function(){
 $.ajax({
  method: "POST",
  url: "/images",
  data: new FormData($(this)[0]),
  contentType: false,
  processData: false,
  enctype: 'multipart/form-data'
 }).then(function(res){
  postimage(res);
 });
});
//when 'x.png is hovered over the image is made larger'

function animate(){
        document.getElementById('x.png').style.webkitTransitionDuration='1s';
        document.getElementById('x.png').style.backgroundSize="200% 200%";
	}
// </script>
// <div id="a" onmouseover="animate()" style="width: 200px; height: 70px; border: 1px solid; background: url('http://www.wpclipart.com/food/fruit/apple/apples_4/apple_honeycrisp_small.png') no-repeat;background-size: 100% 100%; ">
// </div>

function enlarge (){
	document.getElementById("x.png").addEventListener("hover");
// this is css>>>	// zoom: 0.5;
	// transform: scale(.5);

// ------conne{cting the back-end with the front-end below (Camille)

var getUser = function(){

  $.ajax({
    method: "GET",
    url: "/User"
  }).then(function(res){
    console.log(res);
    $('.container').empty();
    for(var i = 0; i < res.length; i++){
      var card = `<div class="card">
        <h1>`+ res[i].email +`</h1>
        <h3>`+ res[i].password +`</h3>
        <h3>`+ res[i].firstname +`</h3>
        <h3>`+ res[i].lastname +`</h3>
        <h3>`+ res[i].birthdate +`</h3>
        <button onclick="deleteEmployee(`+ res[i].id +`)">DELETE</button>
      </div>`;
      $(".container").append(card);
    }
  });

};
getUser();

var deleteUser = function(id){
  $.ajax({
    method: "DELETE",
    url: "/User/" + id
  }).then(function(res){
    getUser();
  })
}*/
