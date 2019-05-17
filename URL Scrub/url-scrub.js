//document.getElementById("urlGrab").onClick = replace();

// chrome.browserAction.onClicked.addListener(function(tab){
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//       var activeTab = tabs[0]
      
//       replace(activeTab.url)
 
//   })
// })


  function replace(url) {


  alert(url);
    var preSplit = url.replace("http://ciss", "N:")
    var splitTxt = decodeURIComponent(preSplit).split("/");


    var holder = [];
    var fileName;
    
    for(var i = 0; i < splitTxt.length; i++) {
      if(i === splitTxt.length - 1) {
        fileName = splitTxt[i];
        holder.push("<ul>" + "<li>Filename: <strong>" + splitTxt[i] + "</strong></li>");
      } else {
        holder.push("<ul>" + "<li>" + splitTxt[i] + "</li>");
      }

    }
    
 
    copyTxt(splitTxt, fileName);

    document.getElementById('output').innerHTML = holder.join("");
   

    } 
  

  function copyTxt(splitTxt, fileName) {
    alert("gotthis")
    var copyArea = document.createElement('textarea');
    alert(copyArea);
    splitTxt.pop();
    document.body.appendChild(copyArea);
    copyArea.value = splitTxt.join("/");
    console.log()
    copyArea.select();
    document.execCommand("copy")
    document.body.removeChild(copyArea);

    
  }

  document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("urlGrab");
    link.addEventListener("click", function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
              var activeTab = tabs[0]
              
             replace(activeTab.url)
         
           })
      
    })
  })
