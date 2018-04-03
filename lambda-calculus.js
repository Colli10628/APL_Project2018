const lam = 'λ';

function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

function calculate(){
	var expression = document.getElementById("expression").value;
 var copy = expression;
  expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
var numbers = copy.split(/[^0-9\.]+/);
var operators = expression.split("#").filter(function(n){return n});
var result = [];

for(i = 0; i < numbers.length; i++){
     result.push(numbers[i]);
     if (i < operators.length) result.push(operators[i].trim());
}
  var numLamda = numbers.length;
  var letter = 'a';
  var letters = [letter];
  var expression = '';
  for (count = 0; count < numLamda; count++) {
      expression += '(';
      expression += (lam + letter + '.');
      if (count + 1 == numLamda) {
          var x = 0;
          for (i = 0; i < letters.length; i++) {
              expression += letters[i];
              if (i + 1 != letters.length) {
                  expression += operators[x];
                  x = x + 1;
              }
          }
      }
      letter = nextLetter(letter);
      letters.push(letter);
  }
  for (count = 0; count < numLamda; count++) {
     expression += ')' + numbers[count];
  }
document.getElementById("equation").value = expression;
};