//直接使用一个最简单的javascript对象做model
window.greetingModel = {name:"Alex"};
Knot.ready(function(){
    $.ajax({
        type:"GET",
        url:"bookstore.json"
    }).then(function(ret){
            window.greetingModel.categories = [{name:"aaa",name2:"aaa2"},{name:"bbb",name2:"bbb2"},{name:"ccc",name2:"ccc2"},{name:"fff",name2:"fff2"}];
        },
        function(err){
            alert(err);
        }
    );
});
