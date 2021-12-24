


function showhide() {
    


    if (document.getElementById("hide").style.display === "block") {
        document.getElementById("hide").style.display = "none";
        document.getElementById("show").innerHTML = "SHOW"
       
    }
    
    
    else {
        document.getElementById("hide").style.display = "block";
        document.getElementById("show").innerHTML = "HIDE";
    }


  }