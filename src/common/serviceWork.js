/**
* @file service work脚本
**/

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/xingzhe/src/common/test.js', {
        scope: './'
    }).then(function (req, res) {
        console.log(req);
    }).catch(function (err) {
        console.log(err);
    })
}
else {
    document.write('<h1>不支持service work</h1>');
}
