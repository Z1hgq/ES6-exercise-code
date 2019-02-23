//JavaScript定义类的四种方法

//1.工厂方法

function createPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        window.alert(this.name)
    };
    return obj;
}

//2.构造函数方法

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        window.alert(this.name)
    };
}

//3.原型方法

function Person() {

}
Person.prototype = {
    constructor: Person,
    name: 'ning',
    age: '23',
    sayName: function() {
        window.alert(this.name);
    }
}

//4.组合使用构造函数和原型方法

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        window.alert(this.name);
    }
}

//javascript 实现继承的3中方法

//1.借用构造函数

function SuperType(name) {
    this.name = name;
    this.sayName = function() {
        window.alert(this.name);
    }
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

//2.对象冒充

function SuperType(name) {
    this.name = name;
    this.sayName = function() {
        window.alert(this.name);
    }
}

function SubType(name, age) {
    this.supertype = SubType;
    this.supertype(name);
    this.age = age;
}

//3.组合继承

function SuperType(name) {
    this.name = name;
}
SubType.prototype = {
    constructor: SuperType,
    sayName: function() {
        window.alert(this.name);
    }
}

function SubType(name, age) {
    SuperType.call(this, name); //继承属性
    this.age = age;
}
SubType.prototype = new SuperType(); //继承方法