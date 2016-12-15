// Title: Testing reddit api
// Description: Just a quick example of pulling JSON data from the reddit api
// Author: Storm Henry
$.getJSON(
        //Grabbing data from r/earthporn
        "http://www.reddit.com/r/earthporn.json?jsonp=?",
        function grabData(data){
          $.each(
            data.data.children.slice(0, 5),
            function (i, post) {

              console.log(post.data);
              //quick example of it being displayed in html..
              $("#posts").append('<h2>' +post.data.title+ '</h2>' );
              //Lets get fun with this...
              $("#posts").append( '<img src="' + post.data.url +'" alt="" class="img-rounded">');
              $("#posts").append( '<hr>');

            }
          )
        }
      )
      .done(function() { alert("second success"); })
      .fail(function() { alert("error"); })
      .always(function() { alert("complete"); });