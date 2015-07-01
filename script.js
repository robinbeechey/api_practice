// $(function(){
//   $('.box').on('click', function() {
//     alert("hello");
//   })
// });

// 567564

$(function() {

  function getRandomNumber() {     
    number = Math.floor(Math.random()*900000) + 100000;
    return number;
  };

  $('#randomize').on('click', function() {  
    var dribblePluck = "http://api.dribbble.com/shots/"+ getRandomNumber()
    $.ajax({
        url: dribblePluck,
        type: "get",
        cache: true,
        dataType: "jsonp",      
        success: function(response){
            console.log(response);
            var content = '<h3 class="text-center"><a href="' + response.url + '">' + response.title + '</a></h3>';          
                content += '<h6 class="text-center">' + response.likes_count + ' likes & ' + response.comments_count + ' comments</h6><br>'; 
                content += '<p class="text-center">' + response.player.location + '</p>';  
                content += '<p class="text-center"><img class="text-center" src="' + response.image_url + '" alt="' + response.title + '"></p>';        
            $(".box").html(content);
        }, 
          error: function() {          
          console.log("no");
          }
    });
  });
});