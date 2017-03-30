var viewPhoto = function(){
 $.ajax({
  method:"GET",
  url:"/images"
 }).then(function(res){
  console.log(res);
  $('.box1').empty();
  for(var i=0; i<res.length;i++){
   $('.box1').append('<div class="box" style="height:max-content"><img src="'+res[i].imageURL+'"style="width 60px; height:80px;"><h1>'+res[i].imageTitle+'</h1><p>'+res[i].imageDesc+'</p></div>');
  }
 });
};
viewPhoto();
$('#imageForm').on('submit', function(e){
 e.preventDefault();
//$('#imageForm').on('submit', function(){
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
 });
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


// -------------------------
// document.getElementByx.p('.box')
// 	.addEventlistener('mouseover',
// 	function(){
// 		document.getElementByx.p('box')
// 		.style.transform="scale(0.5)";
// 	});
// ---
// in jquerry
$('#x.p').on('mouseover',
	function(){
		$('#x.p').css('transform', 'scale(.5)'
	});