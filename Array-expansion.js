//将一组值转换为数组
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}
//将类似数组的对象和可遍历的对象转换成真正的数组，包括es6新增的set和map解构
{
  let arrayLike = {
  	'0':'a',
  	'1':'b',
  	'2':'c',
  	length:3
  };
  let arr = Array.from(arrayLike);
  for(item of arr){
  	console.log(item);
  }
  console.log(Array.from([1,3,5],function(item){return item*2}));
}
//填充数组
{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}
{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  //Array.values()在很多地方不适用
  // for(let value of ['1','c','ks'].values()){
  //   console.log('values',value);
  // }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}
//第一个参数：从该位置开始替换数据
//第二个参数：从该位置开始读取数据，默认值是0，如果是负数，表示倒数
//第三个参数：到该位置前停止读取数据，默认等于数组长度，如果是负数，表示倒数
{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}
//find找出数组中第一个符合条件的数
//findIndex找出数组中第一个符合条件的数的位置，如果没有返回-1
{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}