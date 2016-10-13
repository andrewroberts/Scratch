function test_getPermutation() {

  var allArrays = new Array(['a', 'b'], ['c', 'z'], ['d', 'e', 'f']);
  
  function getPermutation(array, prefix) {
   
      prefix = prefix || ''; 
      if (!array.length) { 
          return prefix; 
      } 
  
      var result = array[0].reduce(function (result, value) { 
          return result.concat(getPermutation(array.slice(1), prefix + value)); 
      }, []); 
  
      return result;
  }
  
  Logger.log(getPermutation(allArrays));

}