module.exports = function check(str, bracketsConfig) {
  let left = [];
  let right = [];
  for (let i = 0; i < bracketsConfig.length; ++i){
    left.push(bracketsConfig[i][0]);
    right.push(bracketsConfig[i][1]);
  }
  let k = 0;
  let bool_check = [];
  for (let i = 0; i < str.length; ++i){
    for (let j = 0; j < left.length; ++j){
      if (str[i] === left[j] && str[i] === right[j]){
        k += 1;
        bool_check.push('same' + j);
        break;
      }
      if (str[i] === left[j]){
        k += 1;
        bool_check.push('left' + j);
        break;
      }
      if (str[i] === right[j]){
        k += 1;
        bool_check.push('right' + j);
        break;
      }
    }
  }
  if (k != str.length){
    return Boolean(0);
  }
  let right_sec = [];
  let same_check = 0;
  for (let i = 0; i < str.length; ++i){
    if (bool_check[i][0] === 's'){
      if (right_sec.length !== 0 && right_sec[right_sec.length - 1][0] === 's' && right_sec[right_sec.length - 1][4] === bool_check[i][4]){
        right_sec.pop();
        continue;
      }
      right_sec.push(bool_check[i]);
      continue;
    }
    if (bool_check[i][0] === 'l'){
      right_sec.push(bool_check[i]);
    }
    else {
      if (right_sec.length === 0){
        return Boolean(0);
      }
      if (bool_check[i][5] != right_sec[right_sec.length - 1][4]){
        return Boolean(0);
      }
      else {
        right_sec.pop();
      }
    }
  }
  if (right_sec.length !== 0){
    return Boolean(0);
  }
  return Boolean(1);
}
