/*
$(function() {

  // your code will go here

});
*/
$.ajax({
  url: 'https://www.codeschool.com/users/2883403.json',
  dataType: 'jsonp',
  success: function(response){

    var element = response.courses.completed;

  	for (var ans = 0; ans < element.length; ans++){
      //adding a div element per badge
      $('#badges').append('<div class="course"></div>');
  	}

    var addedDivs = document.getElementsByClassName('course');

    for (var ans = 0; ans < addedDivs.length; ans++){

      var headerEl = document.createElement('h3');
      var courseImg = document.createElement('img');
      var courseAnchor = document.createElement('a');

      headerEl.innerHTML = element[ans].title;
      courseImg.src = element[ans].badge;
      courseAnchor.href = element[ans].url;
      courseAnchor.target = '_blank';
      courseAnchor.innerHTML = 'See Course';

      $(addedDivs[ans]).append(headerEl);
      $(addedDivs[ans]).append(courseImg);
      $(addedDivs[ans]).append(courseAnchor);
      $('a').addClass('btn btn-primary');
    }

  }
});

