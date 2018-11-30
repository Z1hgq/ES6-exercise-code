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
{
  // 数据结构横向对比，增，查，改，删
  let map=new Map();
  let array=[];
  // 增
  map.set('t',1);
  array.push({t:1});

  console.info('map-array',map,array);

  // 查
  let map_exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  console.info('map-array',map_exist,array_exist);

  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',map,array);

  // 删
  map.delete('t');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',map,array);
}
{
  // set和array的对比
  let set=new Set();
  let array=[];

  // 增
  set.add({t:1});
  set.add({t:3});
  array.push({t:1});

  console.info('set-array',set,array);

  // 查
  let set_exist=set.has({t:1});
  //console.log(set.has({t:1}));//为什么是false呢？
  let array_exist=array.find(item=>item.t);
  console.info('set-array',set_exist,array_exist);

  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);

  // 删
  set.forEach(item=>item.t?set.delete(item):'');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}
{
  // map,set,object对比
  let item={t:1};
  let map=new Map();
  let set=new Set();
  let obj={};

  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;

  console.info('map-set-obj',obj,map,set);

  // 查
  console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })

  // 改
  map.set('t',2);
  item.t=2;
  obj['t']=2;
  console.info('map-set-obj-modify',obj,map,set);

  // 删除
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map,set);
}