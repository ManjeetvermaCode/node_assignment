const groupBy = (array, key) => {
    return array.reduce((result, obj) => {
      const keyValue = obj[key];
      if (!result[keyValue]) {
        result[keyValue] = [];
      }
      result[keyValue].push(obj);
      return result;
    }, {});
  };

module.exports=groupBy
  