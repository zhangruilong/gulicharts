window.pageInfo = new Object();

$(function(){
	var b=document.documentElement.clientHeight;  
	$('#todaOd-box').css('max-height',b*0.4+'px');
	//统计数据
	$.ajax({
		url:"CompanyAction.do?method=comIndexInfo",
		type:"post",
		data:{},
		success:function(resp){
			var data = eval('('+resp+')');
			window.pageInfo.topInfo = data.root[0];
		},
		error:function(resp){
			var data = eval('('+resp+')');
			alert(data.msg);
		}
	});
	//今日订单
	$.ajax({
		url:"OrdermAction.do?method=comTodayOrder",
		type:"post",
		data:{},
		success:function(resp){
			var data = eval('('+resp+')');
			window.pageInfo.todayOrdMli = data.root;
			//alert(window.pageInfo.todayOrdMli.length);
		},
		error:function(resp){
			var data = eval('('+resp+')');
			alert(data.msg);
		}
	});
});