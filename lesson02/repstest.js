a = [1, 2, 3]
a.forEach(function(v){
  subFunction(v);
  function subFunction = function(sv){
    console.log(sv);
    }
  });
