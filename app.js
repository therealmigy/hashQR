var shortId = require('shortid'),
    qr      = require('qr-image');

//Generate 10 ids

var i = 10;
var arr = [];
while (i--) {
    arr.push(shortId.generate());
}
console.log(arr);

arr.toString().split(",").forEach(function(value){
    var qr_png = qr.image(value, { type: 'png'});
    qr_png.pipe(require('fs').createWriteStream(value+'.png'));
});
