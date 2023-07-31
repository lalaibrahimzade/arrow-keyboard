 
  const keyText= document.getElementById('key-text');
 document.getElementById('upButton').addEventListener('click', function() {
    console.log('Up arrow key');
    keyText.textContent=`up arrow key`
  });

  document.getElementById('leftButton').addEventListener('click', function() {
    console.log('Left arrow key');
    keyText.textContent=`left arrow key`
  });

  document.getElementById('rightButton').addEventListener('click', function() {
    console.log('Right arrow key');
    keyText.textContent=`right arrow key`
  });

  document.getElementById('downButton').addEventListener('click', function() {
    console.log('Down arrow key');
    keyText.textContent=`down arrow key`
  });


