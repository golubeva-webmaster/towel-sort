
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let res = [];
  if(matrix.length === 0)
    return [];
  matrix.forEach(function(item, i, arr){
    if(i%2 === 0){
      res = res.concat(item);
    }
    else{
       item.reverse();
      res = res.concat(item);
    }
  });
  return res;
}
