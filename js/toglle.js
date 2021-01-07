$(function() {
   $('#nav-toggle').click(function() {
   $(this).toggleClass('active');
  $('.menu').toggleClass('open');
 });
    $('.menu a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('#nav-toggle').click();
        }
    });
});
