const userArea = document.querySelectorAll('.userArea');



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     userArea.forEach((link)=>{link.style.display = "block"})

    } else {
        userArea.forEach((link)=>{link.style.display = "none"})
        
    }
  });