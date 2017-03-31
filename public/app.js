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

$("#close1").on("click",function(){
  $("#popup").hide(),$("#loginbutton").show();
});
$("#close2").on("click",function(){
  $("#popup").hide(),$("#loginbutton").show();
});
/*-----------------RICHARD-----------------*/
