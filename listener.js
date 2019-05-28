var port = chrome.runtime.connect({name: "isactive"});
port.postMessage({status: "Y"});

// document.addEventListener('DOMContentLoaded', function(){
//     var checkTool = document.getElementById('isallowopenone');
//     var url = document.getElementById('urlmonitered');

//     console.log(localStorage.getItem('ischecked')+"|"+localStorage.getItem('url'));

//     if(localStorage.getItem('ischecked')!=''){
// 	    checkTool.checked=localStorage.getItem('ischecked');
// 	}
	
// 	if(localStorage.getItem('url')!=''){
// 		url.value=localStorage.getItem('url');
// 	}

//     checkTool.addEventListener('click', function(e){
//     	var ischecked = checkTool.checked;
//     	localStorage.setItem('ischecked', ischecked);
//     	console.log(localStorage.getItem('ischecked'));
//     })

//     url.addEventListener('blur', function(e){
//     	var url = document.getElementById('urlmonitered');
//     	if(url.value.lastIndexOf('/')<url.value.length-1){
//     		url.value+='/';
//     	}
//     	localStorage.setItem('url', url.value);
//     	console.log(localStorage.getItem('url'));
//     })
// });