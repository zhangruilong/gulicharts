
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
var updateInterval = 30;
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
	var d1 = [];
    for (var i = 0; i <= 10; i += 1)		//循环添加10个数组,数组中第一个数字是位置,第二个数字是柱状图的高度
        d1.push([i, parseInt(Math.random() * 30)]);

    var d2 = [];
    for (var i = 0; i <= 10; i += 1)
        d2.push([i, parseInt(Math.random() * 30)]);

    var d3 = [];
    for (var i = 0; i <= 10; i += 1)
        d3.push([i, parseInt(Math.random() * 30)]);

    var stack = 0, bars = true, lines = false, steps = false;

    function plotWithOptions() {
    	alert(d1.toString());
        $.plot($("#stackchart"), [ d1, d2, d3 ], {
            series: {
                stack: stack,			//柱状图
                lines: { show: lines, fill: true, steps: steps },
                bars: { show: bars, barWidth: 0.6 }
            }
        });
    }

    plotWithOptions();

    $(".stackControls input").click(function (e) {
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
    });