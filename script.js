document.addEventListener('DOMContentLoaded', function(){
    const text = "Engineering the future, one innovation at a time.";
    const speed = 100; // Adjust typing speed (in milliseconds)
  
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    
    typeWriter();
  });
  