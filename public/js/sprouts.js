// YOUR CODE GOES HERE
  var linkNum = function(link){
    return /\d+/.exec(link);
  };


$(".more-sprouts").on("click", function(event) {
  event.preventDefault();
  var pageURL = $('a').attr("href");
  var pageNUM = parseInt(linkNum(pageURL)[0]);

  var request = $.ajax({
  method: "GET",
  url: "/tweets.json?page=" + pageNUM

  });


  request.done(function(data) {
    for(var i = 0; i < 10; i++){
      $(".tweets").append("<li class=tweet>" + data[i]["text"] + "<div class=user>" + data[i]['username'] + "</div></li>");
    }
    $('a').attr('href', '/tweets?page=' + (pageNUM + 1));
  });

});
