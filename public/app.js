
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
	zoom: 0.5;
	-moz-transform: scale(.5);
};
