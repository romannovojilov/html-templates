$('#myModal_1').modal('show');

var _prev = "temp-pager__page_prev",
    _next = "temp-pager__page_next";

$('.temp-pager__action').bind('click', function () {

    var $target = $(this);
    var $page = $($target.attr('data-page'));
    if ($page.length) {
        var anim = $target.attr('data-anim');
        var $parent = $page.closest('.temp-pager');
        $parent.find('.temp-pager__page')
            .removeClass(_prev)
            .removeClass(_next);

        $page.addClass(anim == "next" ? _next : _prev)
            .prependTo($parent);
    }
});