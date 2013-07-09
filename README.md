#css.js
获取或者设置DOM对象的css属性
###声明
css.js大部分代码来自jquery,它的存在是为了在某些只需要简单css函数的情形下可以不用引用jquery。
要知道压缩成一行后jquery也还有90k呢！
###如何使用
    var elem=document.getElementsByTagName("div")[0]; //获取一个div元素
    var mycss=css(elem);
    var w=mycss.get('width'); //获取width属性
    var w=css(elem).get('width');	//也可以像jquery一样链式操作
    var ml=mycss.get('margin-left');	//可以不用写成marginLeft
    mycss.set({width:'100px',height:'100px'});  //一次性设置多个css属性
    mycss.set(width,'100px');  //设置一个css属性

