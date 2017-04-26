
var i;
var n=3;

$(document).ready(function(){
	

	$(".add").click(function(){
		$(".ui-item3-line:last").append("<div class='line'><div class='line-number'></div><div class='line-body'></div><div class='line-delete'>Delete</div></div> ");
		n++;
		for(i=0;i<n;i++){
			$(".line-number").eq(i).text(i+1);
		}
	});


	$("body").on("click",".line-delete",function(event){
		$(".line:last").remove();
		n--;
		for(i=0;i<n;i++){
			$(".line-number").eq(i).text(i+1);
		}
	});




});


