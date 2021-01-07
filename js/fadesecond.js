$('head').append(
'<style>dl{display:none;}'
);
$(window).on("load", function() {
$('dl').delay(600).fadeIn("slow");
});