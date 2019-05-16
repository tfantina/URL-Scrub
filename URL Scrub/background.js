chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var activeTab = tabs[0];
        var  tabURL = tabs[0].url;
        console.log(tabURL);
        chrome.tabs.sendMessage(activeTab.id, { "url": tabURL});
   
    })
})
