export function timer(time, heheheha) {
    return new Promise(resolve => {
      let today = new Date().toLocaleDateString()
      var countDownDate = new Date(today+" "+time).getTime();
  
      var x = setInterval(function() {
  
        var now = new Date().getTime();
  
        var distance = countDownDate - now;
  
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        document.getElementById("time").innerHTML = 
        (hours > 0 ? hours + "h " : "") + 
        minutes + "m " + 
        seconds + "s ";    
        document.getElementById("text").innerHTML = heheheha;
  
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("time").innerHTML = "woah";
          resolve();
          return;
        }
      });
    });
  }
  
