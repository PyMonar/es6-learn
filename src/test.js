function* runAsync(){
    var i;
    var p;
    for (i = 0; i < 3; i++) {
        yield p = new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('执行完成' + i);
                resolve(i);
            }, 1000);
        });
    }            
}

var li = runAsync();

li.next().value.then(function(data){
    console.log(data);
    return li.next().value;
}).then(function(data) {
    console.log(data);
    return li.next().value;
}).then(function(data) {
    console.log(data);
    return li.next().value;
}).catch(function (error) {
    console.log(error);
});