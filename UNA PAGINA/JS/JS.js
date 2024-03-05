  document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementById('textAnimation');
    var textArray = ['Ensambles', 'Fiabilidad', 'Calidad','Profesionales'];
    var index = 0;
  
    function animateText() {
      var currentText = textArray[index];
      var charIndex = 0;
      var textInterval = setInterval(function () {
        if (charIndex < currentText.length) {
          textElement.textContent += currentText[charIndex];
          charIndex++;
        } else {
          clearInterval(textInterval);
          setTimeout(function () {
            deleteText();
          }, 1000);
        }
      }, 100);
    }
  
    function deleteText() {
      var text = textElement.textContent;
      var textInterval = setInterval(function () {
        if (text.length > 0) {
          text = text.slice(0, -1);
          textElement.textContent = text;
        } else {
          clearInterval(textInterval);
          index = (index + 1) % textArray.length;
          animateText();
        }
      }, 50);
    }
  
    animateText();
  });
  