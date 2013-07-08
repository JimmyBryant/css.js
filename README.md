#css.js
获取或者设置DOM对象的css属性
###声明
css.js大部分代码来自jquery,它的存在是为了在某些只需要简单css函数的情形下可以不用引用jquery。
要知道压缩成一行后jquery也还有90k呢！
###如何使用
    var elem=document.getElementsByTagName("div")[0]; //获取一个div元素
    var mycss=new css(elem);
    mycss.get(name); //获取css属性
    mycss.set({name1:value1,name2:value2});  //一次性设置多个css属性
    mycss.set(name,value);  //设置一个css属性

