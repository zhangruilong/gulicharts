//chart with points(图 关联 点?)
if ($("#sincos").length) {
    var sin = [], cos = [];

    for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i) / i]);
        cos.push([i, Math.cos(i)]);
    }

    var plot = $.plot($("#sincos"),
        [
            { data: sin, label: "sin(x)/x"},
            { data: cos, label: "cos(x)" }
        ], {
            series: {
                lines: { show: true  },
                points: { show: true }
            },
            grid: { hoverable: true, clickable: true, backgroundColor: { colors: ["#fff", "#eee"] } },
            yaxis: { min: -1.2, max: 1.2 },
            colors: ["#539F2E", "#3C67A5"]
        });
    //显示工具提示
    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #fdd',
            padding: '2px',
            'background-color': '#dfeffc',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#sincos").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));

        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);

                showTooltip(item.pageX, item.pageY,
                    item.series.label + " of " + x + " = " + y);
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });


    $("#sincos").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });
}

//flot chart
if ($("#flotchart").length) {
    var d1 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.25)
        d1.push([i, Math.sin(i)]);

    var d2 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.25)
        d2.push([i, Math.cos(i)]);

    var d3 = [];
    for (var i = 0; i < Math.PI * 2; i += 0.1)
        d3.push([i, Math.tan(i)]);

    $.plot($("#flotchart"), [
        { label: "sin(x)", data: d1},
        { label: "cos(x)", data: d2},
        { label: "tan(x)", data: d3}
    ], {
        series: {
            lines: { show: true },
            points: { show: true }
        },
        xaxis: {
            ticks: [0, [Math.PI / 2, "\u03c0/2"], [Math.PI, "\u03c0"], [Math.PI * 3 / 2, "3\u03c0/2"], [Math.PI * 2, "2\u03c0"]]
        },
        yaxis: {
            ticks: 10,
            min: -2,
            max: 2
        },
        grid: {
            backgroundColor: { colors: ["#fff", "#eee"] }
        }
    });
}

//stack chart(柱状图)
if ($("#stackchart").length) {
	alert('柱状图');
    var d1 = [];
    for (var i = 0; i <= 10; i += 1)
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
                stack: stack,
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
}

//饼图
var data = [
    { label: "Internet Explorer", data: 12},
    { label: "Mobile", data: 27},
    { label: "Safari", data: 85},
    { label: "Opera", data: 64},
    { label: "Firefox", data: 90},
    { label: "Chrome", data: 112}
];

if ($("#piechart").length) {
    $.plot($("#piechart"), data,
        {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            legend: {
                show: false
            }
        });

    function pieHover(event, pos, obj) {
        if (!obj)
            return;
        percent = parseFloat(obj.series.percent).toFixed(2);
        $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
    }

    $("#piechart").bind("plothover", pieHover);
}

//圈图
if ($("#donutchart").length) {
    $.plot($("#donutchart"), data,
        {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true
                }
            },
            legend: {
                show: false
            }
        });
}


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

//实时图表
if ($("#realtimechart").length) {
    var options = {
        series: { shadowSize: 1 }, // drawing is faster without shadows
        yaxis: { min: 0, max: 100 },
        xaxis: { show: false }
    };
    var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);
//更新
    function update() {
    	alert("update");
        plot.setData([ getRandomData() ]);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();

        setTimeout(update, updateInterval);
    }

    update();
}