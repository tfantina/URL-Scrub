document.getElementById("urlGrab").onClick = replace();

  function replace() {
    var str = document.getElementById("url").value;
    if(str.length > 0){
   
    var preSplit = str.replace("http://ciss", "N:")
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
   
    
    } else {
      document.getElementById('output').innerHTML = "Please enter a CISS URL"
    }
  }

  function copyTxt(splitTxt, fileName) {
    var copyArea = document.createElement('textarea');
    splitTxt.pop();
    document.body.appendChild(copyArea);
    copyArea.value = splitTxt.join("/");
    console.log()
    copyArea.select();
    document.execCommand("copy")
    document.body.removeChild(copyArea);
    
  }