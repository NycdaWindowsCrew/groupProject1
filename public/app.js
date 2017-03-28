$('#imageForm').on('submit', function(){
 $.ajax({
  method: "POST",
  url: "/images",
  data: new FormData($(this)[0]),
  contentType; false,
  processData: false,
  enctype: 'multipart/form-data'
 }).then(function(res){
  postimage(res);
 });
});
