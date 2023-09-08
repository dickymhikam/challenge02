const dataAngka = [9,4,7,7,4,3,2,2,8]

function getAngkaKeduaTerbesar(dataAngka) {
  if (dataAngka) {
    dataAngka.sort(function(a,b){return b - a});
    return dataAngka[1]
  }else if (dataAngka === undefined) {
      return "ERROR: There is no parameter!";
  }else if(typeof dataAngka != "object") {
      return "ERROR: Invalid type data! It must be an array!";
  };
}



console.log(getAngkaKeduaTerbesar(dataAngka))
console.log(getAngkaKeduaTerbesar(0))
console.log(getAngkaKeduaTerbesar())
