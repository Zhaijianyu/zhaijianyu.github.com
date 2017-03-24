

//#d11可改为td 
//document.querySelector("#d11").addEventListener('click',function(){
//	alert('a');
//})


var tdlist = document.querySelectorAll('td')

for(i=0;i<tdlist.length;i++){
	item = tdlist[i];
	item.addEventListener('click',showMsg)
}
function showMsg(event){
	alert('a');
}

function myFunction11(event){
	//console.log("click at row 1column 1");
	//console.log(document.getElementById('tb1').innerHTML);
	console.log(event.target.innerHTML);

	//document.getElementById('tb1').style.backgroundColor="red";
}


function myFunction12(){

}