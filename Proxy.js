{
	//拦截操作
	let x = 'something'; person = {
	'name':'张三'
	};
	let proxy = new Proxy(person,{
		get:function(target,property){
			if(property in target){
				return target[property];
			}else{
				throw new ReferenceError("Property \"" + property + "\" does not exit." )
			}
		}
	})

	console.log(proxy.name);
	//proxy.age;//ReferenceError: Property "age" does not exit.
}
{
	//方法可以继承
	let proto = new Proxy({},{
		get(target,propertyKey,reciver){
			console.log('GET'+propertyKey);
			return target[propertyKey];
		}
	});
	let obj = Object.create(proto);
	obj['name'] = '李四';
	//console.log(obj);
	console.info(obj.name);
}
{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  console.log('get',monitor.time);

  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor);

  console.log('has','name' in monitor,'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // console.log('delete',monitor);
  console.log('ownKeys',Object.keys(monitor));

}