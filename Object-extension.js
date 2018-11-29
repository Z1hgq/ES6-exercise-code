//允许变量和函数作为对象的属性和方法
{
	let foo = 'hahhaha';
	let baz = {foo};
	console.log(baz);
}
//可以只写属性名不写属性值
{
	function f(x,y){
		return {x,y};
	}
	console.log(f(1,2));
}
{
	let birth = '1997/08/28';
	let Persion = {
		name:'zhanggenqi',
		birth,
		hello(){console.log('my name is ' ,this.name);}
	}
	console.log(Persion);
	console.log(Persion.hello());
}
//使用变量或表达式作为属性名,放进方括号[]
{
	let lastWord = 'last word';
	let obj = {
		'first word' : 'hello',
		[lastWord] : 'world'
	};
	console.log(obj);
}
//表达式还可以作为方法名
{
	let obj = {
		['h' + 'ello'](){
			console.log('hello world');
		}
	}
	console.log(obj);
}
{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj);

}
{
  // 新增API
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
  console.log('数组',Object.is([],[]),[]===[]);

  //assign是浅复制不是深复制，是对对象的引用
  console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

  //Obj.keys()返回对象的所有属性可遍历的键名
  //Obj.values()返回对象所有属性可遍历的键值
  //Obj.entries()返回对象属性键值对
  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}
{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
