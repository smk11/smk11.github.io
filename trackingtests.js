$("#trackButton").click(function trackMyButtonClick(e) {
    e.preventDefault();
    ga('send', 'event', 'Form', 'submit', {
        hitCallback: function () {
            console.log("form submit sent");
        }
    });
});

$("a").each(function (i) {
    var elem = $(this);
    elem.preventDefault();
    var url = elem.href;
    elem.click(function trackLink(url){
        ga('send', 'event', 'outbound', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function () {
                console.log("hitCallback:"+ url);
                document.location = url;
            }
        });
    });
});
