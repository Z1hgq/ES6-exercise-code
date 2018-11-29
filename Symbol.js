{
	let s = Symbol();
	console.log(typeof s);
	let s1 = Symbol('foo');
	let s2 = Symbol('bar');
	console.log(s1,s2);
	console.log(s1.toString(),s2.toString());
}
{
  // 声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2);
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4);
}
//相同参数的Symbol函数的返回值是不一样的
{
	console.log(Symbol() === Symbol());
	console.log(Symbol('foo') === Symbol('foo'));
}
//Symbol不能与其他类型的数值进行计算，但是可以转化成字符串和布尔值
//Symbol值作为属性时不能使用点运算符
{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj);

  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
