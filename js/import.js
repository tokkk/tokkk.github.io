var root;
var dir = document.getElementsByTagName('script');
var i = dir.length;
         
while (i--) {
    var match = dir[i].src.match(/(^|.*\/)import\.js$/);
    if (match) {
        root = match[1]    
        break;
    }
}