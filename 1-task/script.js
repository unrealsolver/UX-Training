var screen = document.getElementById('screen')

//Callbacks

var onNum = function(num) {
  // Логгирование
  console.log(num)
  screen.innerHTML = num
  
}

var onAdd = function() {
  //code
}

// onDiv/Mul/Sub ...

var onReset = function() {
  screen.innerHTML = ''
}
