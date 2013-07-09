module('css.js tests');

var demo1=document.getElementById('demo1'),
	mycss=css(demo1);

test( "测试get方法", function() {
  equal( mycss.get('height'),'100px', "高度100px" );
  notEqual(mycss.get('width'),'auto', "宽度不会返回auto" );
  equal(parseFloat(mycss.get('opacity')).toFixed(1),0.8,'透明度0.8');
  equal(Math.round(parseFloat(mycss.get('margin-right'))),'19','margin-right19px');
});

test('测试set方法', function() {
	mycss.set({height:'120px',width:'12em',opacity:1,'margin-right':'20px'});
	equal(mycss.get('height'),'120px','高度返回120px');
	notEqual(mycss.get('width'),'12em','宽度返回不是12em');
	equal(mycss.get('opacity'),'1','透明度1');
	equal(mycss.get('margin-right'),'20px','margin-right是20px');
});

test('测试set单个样式', function() {
	mycss.set('margin-right','30px');
	mycss.set('opacity','0.1');
	equal(parseFloat(mycss.get('opacity')).toFixed(1),0.1,'透明度0.1');
	equal(mycss.get('margin-right'),'30px','margin-right是30px');
});


