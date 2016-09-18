
// we use an inline data source in the example, usually data would(我们在例子中使用的一个内联数据源, 通常的数据)
// be fetched from a server(从服务器获取)
var data = [];
var totalPoints = 300;		//总分数
//得到随机数据 ?
function getRandomData() {
    if (data.length > 0)
        data = data.slice(1);

    // 做一个随机游标
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0)
            y = 0;
        if (y > 100)
            y = 100;
        data.push(y);
    }

    // zip the generated y values with the x values(用x值压缩生成的Y值)
    var res = [];
    for (var i = 0; i < data.length; ++i)
        res.push([i, data[i]])
    return res;
}

// setup control widget(设置控件)
var updateInterval = 70;
$("#updateInterval").val(updateInterval).change(function () {
    var v = $(this).val();
    if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1)
            updateInterval = 1;
        if (updateInterval > 2000)
            updateInterval = 2000;
        $(this).val("" + updateInterval);
    }
});


	//生成柱状图
	window.pageInfo = new Object();
	var mydate = new Date();
	var t = formatDate(mydate);
	var odmNum = [];					//普通订单数量
	var odmMana = [];
	var pl = null;
    var stack = 0, bars = true, lines = false, steps = false;
    //生成柱状图
    function plotWithOptions() {
    	//alert(odmNum.toString());
    	pl = $.plot($("#stackchart"), [ odmNum ],  {
            series: {
            	label : "单位:千元",			//图例
                stack: stack,			//柱状图
                lines: { show: lines, fill: true, steps: steps },
                bars: { align: "center", show: bars, barWidth: 0.6 },
            },
            xaxis: {  
                ticks: odmMana,  											//自定义每一列下面的文字
            },
            grid: { hoverable: true, clickable: true, backgroundColor: { colors: ["#fff", "#eee"] } },		//可以绑定 点击事件 和 鼠标悬浮时的事件
        });
    }
var empname = "";
$(function(){
	//绑定时间
	$('#odm-Date').change(function(){
		t=$(this).val();
		initManaOd();
		initPlotData();
	});
	//页面数据
	initPlotData();

});
//初始化图形数据
function initPlotData(){
	odmNum = [];
	odmMana = [];
	$.ajax({
		url:"EmpAction.do?method=manaOrderNum",
		type:"post",
		data:{
			date:t
		},
		success:function(resp){
			var data = eval('('+resp+')');
			window.pageInfo = data.root;
			$.each(data.root,function(i,item){
				var empMoney = parseFloat(item.empcode) / 1000;
				odmNum.push([i,Math.round(empMoney) ]);
				if(typeof(item.createtime)!='undefined'){
					odmMana.push([i,item.createtime]);			//设置列名
				} else {
					odmMana.push([i,"未分配"]);
				}
			});
			plotWithOptions();								//生成柱状图
			if(typeof(data.root[1]) != 'undefined'){
				empname = data.root[1].createtime;
				initManaOd();
			} else {
				empname = '未分配';
				initManaOd();
			}
			$('#stackchart').unbind('plotclick');
			$('#stackchart').bind('plotclick',function(event ,pos ,item){
				if(item){
					//alert(item.dataIndex);
					var itIndex = item.dataIndex;
					//alert(odmMana[itIndex][1]);
					empname = odmMana[itIndex][1];
					initManaOd();
				}
			});
		},
		error:function(resp){
			var data = eval('('+resp+')');
			alert(data.msg);
		}
	});
}
//订单表数据
function initManaOd(){
    $.ajax({
    	url:"EmpAction.do?method=manaOrderm",
    	type:"post",
    	data:{
    		date:t,
    		empname:empname
    	},
    	success:function(resp){
    		var data = eval('('+resp+')');
    		window.pageInfo.empOrder = data.root;
    		plotWithOptions();
    	},
    	error:function(resp){
    		var data = eval('('+resp+')');
			alert(data.msg);
    	}
    });
}

    /*$(".stackControls input").click(function (e) {
        e.preventDefault();
        stack = $(this).val() == "With stacking" ? true : null;
        plotWithOptions();
    });
    $(".graphControls input").click(function (e) {
        e.preventDefault();
        bars = $(this).val().indexOf("Bars") != -1;
        lines = $(this).val().indexOf("Lines") != -1;
        steps = $(this).val().indexOf("steps") != -1;
        plotWithOptions();
    });*/


    
    
    
    
    
    
    
    
    
    
    