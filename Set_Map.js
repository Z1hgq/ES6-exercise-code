//Set类似数组，但是内部值是唯一的
{
	let s = new Set();
	let arr = [1,1,2,3,4,5,4,3,2,6]
	arr.forEach(x => s.add(x));//不会添加重复的值
	console.log(s);
	//去除数组重复的值
	console.log([...new Set(arr)]);
	//可以向set添加两个对象但是不能添加两个NaN
	let set = new Set();
	set.add(NaN);
	set.add(NaN);
	console.log(set.size);
	set.add({});
	set.add({});
	console.log(set.size);
}
//set的属性和方法
{
	let s = new Set();
	s.add(1);s.add(2);s.add(2);
	console.log(s.size);
	console.log(s.has(1));
	console.log(s.has(2));
	console.log(s.has(3));
	s.delete(2);
	console.log(s.has(2));
	//clear清除所有成员
}
//set的遍历
{
	let set = new Set(['red','yellow','blue']);

	for(let ele of set.values()){
		console.log(ele);
	}
	for(let ele of set.keys()){
		console.log(ele);
	}
	for(let ele of set.entries()){
		console.log(ele);
	}

	let s = new Set([1,2,3]);
	s.forEach((value,key) => console.log(value * 2));
}
//set与数组的结合
{
	
	let s1 = new Set([1,2,3,4,5]);
	//Array.map()
	console.log(new Set([...s1].map(x => x * 2)));
	console.log(new Set(Array.from(s1, val => val * 2)));
	//Array.filter()
	console.log(new Set([...s1].filter(x => (x % 2) == 0)));

	let a = new Set([1,2,3]);
	let b = new Set([4,3,2]);

	//并集
	console.log(new Set([...a,...b]));

	//交集
	console.log(new Set([...a].filter(x => b.has(x))));

	//差集
	console.log(new Set([...a].filter(x => !b.has(x))));
	console.log(new Set([...b].filter(x => !a.has(x))));

}
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2);
}
{
  let weakList=new WeakSet();

  let arg={};

  weakList.add(arg);

  // weakList.add(2);

  console.log('weakList',weakList);
}
//map结构
{
	let map = new Map([
		  ['name','张三'],
		  ['title','Author']
		]);
	console.log(map.size);
	console.log(map.has('name'));
	console.log(map.get('name'));
	console.log(map.has('title'));
	console.log(map.get('title'));
}
//map同样有has、delet、clear用法,同时还有set(key,value)
{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}
//使用set或map生成map
{
	let set  = new Set([
			['foo',1],
			['bar',2]
		]);
	let map = new Map(set);
	console.log(map);
	let map1 = new Map([['baz',3]]);
	let map2 = new Map(map1);
	console.log(map2);
}
//WeakMap只接受对象作为键名，只有get set has delete四种方法
{
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}