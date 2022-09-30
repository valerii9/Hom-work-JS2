var gor_1 = 10;
var ver_1 = 10;
var pov_str = '*'.repeat(10);
for (var i = 0; i < ver_1; ++i) {
    var str = (i === 0 || i == ver_1 - 1) ? pov_str : '*' + ("&nbsp;".repeat(gor_1 - 2)) + '*';
    document.write(str + '<br/>');
}




