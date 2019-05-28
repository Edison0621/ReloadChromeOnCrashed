chrome.tabs.onCreated.addListener(
    function(tab){
        chrome.tabs.query({}, function(tabs){
            if (tabs.length > 1){
            	for (var i = tabs.length - 1; i >= 0; i--) {
            		if(tabs[i].status == "complete"){
            			continue;
            		}
		  			chrome.tabs.remove(tabs[i].id, function(){})
			  	}
            }
        })
    }
)

chrome.tabs.query({}, function(tabs) {
		chrome.tabs.connect(tabs[0].id, {name: "isactive"});
	}
);

chrome.tabs.query({}, function(tabs) {
	chrome.runtime.onConnect.addListener(function(port) {
	  port.onDisconnect.addListener(function(msg) {
	  		var lastupdatetime = localStorage.getItem('lastupdatetime');
	  		if(lastupdatetime == null || (lastupdatetime != null && Date.parse(new Date()) - lastupdatetime) > 5000){
			  	//alert("监听到连接断开，哎呀");
	  			chrome.tabs.reload();
	  			localStorage.setItem('lastupdatetime', Date.parse(new Date()));
	  		}else if(lastupdatetime != null){
	  			//alert("当前刷新间隔是："+(Date.parse(new Date()) - lastupdatetime));
	  		}
	  	});
	});
});