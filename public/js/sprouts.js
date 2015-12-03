var linkNum = function(link){
   return /\d+/.exec(link);
 };

 var pageAppend = function(data) {
   for(var i = 0; i < 10; i++){
     $(".tweets").append("<li class=tweet>" + data[i]["text"] + "<div class=user>" + data[i]['username'] + "</div></li>");
   }
 }

 var pageIncrement = function(number){
   $('a').attr('href', '/tweets?page=' + (number + 1));
 }

$(window).scroll(function () {
  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1) {
    var pageURL = $('a').attr("href");
    var pageNUM = parseInt(linkNum(pageURL)[0]);

    var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + pageNUM
    });

    request.done(pageAppend);
    pageIncrement(pageNUM);
  }
});
