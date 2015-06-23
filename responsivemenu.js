$(document).ready(function () {
    var listWidth = [];
    var total = 0;
    // new li to append
    var li = $('<li><a>more</a></li>')
    $(li).addClass("list last");
    // new ul to be appended to ul
    var ul = $('<ul>')
    //get the width of browser window
    var winWidth = $(window).width();
    // variable to store index of element after which new li(more) will be added
    var $index = true;

    // variable to state that index vaiable is set, no more index need to be set 
    var $value_set = true;
    $('#wrap ul li').each(function () {
        total += parseInt($(this).width());
        //if window width is less than the total width of elements in menu
        if (total > winWidth) {
            if ($value_set) {
                $index = $(this).index() - 3;
                $value_set = false;
            }
        }

    });
    if (!$value_set) {
        //for each menu item this method called
        $("#wrap ul li:gt(" + $index + ")").each(function () {

            var flag = $(this).is(':last-child');
            if (!flag) {
                ul.append(this);
            }
        });
        var count = ul.children().length;
        var linkText = li.text().replace("more", count);
        li.text(linkText);
        // alert(count);
        //li.text(count);
        /* if (ul.length) {
             $('#wrap ul').append(li.append(ul));
         }*/
        //add newly added list element as second last element in the list
        $('#wrap ul').find(' > li:nth-last-child(1)').before(li.append(ul));




    }

});
