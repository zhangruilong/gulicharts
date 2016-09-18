window.pageInfo = new Object();

$(function(){
	charisma();
	var b=document.documentElement.clientHeight;  
	$('#todaOd-box').css('max-height',b*0.5+'px');
	//统计数据
	$.ajax({
		url:"ChCompanyAction.do?method=comIndexInfo",
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
		url:"ChOrdermAction.do?method=comTodayOrder",
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