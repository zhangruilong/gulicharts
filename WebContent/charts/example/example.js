//直接使用一个最简单的javascript对象做model
window.greetingModel = {name:"Alex"};
Knot.ready(function(){
    $.ajax({
        type:"GET",
        url:"bookstore.json"
    }).then(function(ret){
            window.greetingModel.categories = ret;
        },
        function(err){
            alert(err);
        }
    );
});
