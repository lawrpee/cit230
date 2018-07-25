//
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var menu = document.querySelectorAll('a.childnav');
    var i;
    //loop through all the menu items in the navigation
    for(i=0; i<menu.length; i++) {
        var currentURLstring = (menu[i].getAttribute("href"));
        var currentURLArray = currentURLstring.split('/');
        var currentPage = currentURLArray[currentURLArray.length-1];
        if (currentPage===pageHREF) {
            menu[i].id="activelink"; //turn on if a match
        }
        else {
            menu[i].id=""; //turn off highlighting by default
        }
    }
}