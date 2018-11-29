//函数参数默认值
{
  //  默认值后面不能没有默认值的变量
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}
//
{
  //  y获取的是传入的形参的x，如果前面没有x，那么y取test的那个x
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');
}
//传入...表示的多参数先转成数组
{
  //  都转为数组，类似于arguments
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}
{
  //  扩展运算符  数组展开符
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}
//箭头函数
{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());
}
//尾调函数
{
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}