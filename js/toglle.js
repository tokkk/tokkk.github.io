$(function() {
  $('../header.html#nav-toggle').click(function() {
   $(this).toggleClass('active');
  $('.menu').toggleClass('open');
 });
    $('.menu a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('../header.html#nav-toggle').click();
        }
    });
});
