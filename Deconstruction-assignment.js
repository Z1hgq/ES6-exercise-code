{
	let a,b,reset;
	[a,b] = [1,2];
	console.log(a,b);
}
{
	let a,b,reset;
	[a,b,...reset] = [1,2,3,4,5,6];
	console.log(a,b,reset);
}
{
	let a,b;
	({a,b} = {a:1,b:3});
	console.log(a,b);
}
{
	let a,b,c;
	({a,b,c} = {a:1,b:3});
	//如果没有找到对应的值，那么就是undefined，默认值就是为了解决这个问题
	console.log(a,b,c);
}
{
	//变量交换或者获取函数返回值
	let a = 1,b = 2;
	[a,b] = [b,a];
	console.log(a,b);
}
{
	//选择性地接受想要的值
	function f(){
		return [1,2,3,4,5];
	}
	let a,b;
	[a,...b] = f();
	console.log(a,b);
}
{
	let o = {p:12,q:'ewe'};
	let {p,q,z = 2} = o;
    console.log(p,q,z);
}
{
	let metaData = {
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	};
	let {title:esTitle,test:[{title:cnTitle}]} = metaData
    console.log(esTitle,cnTitle)
}