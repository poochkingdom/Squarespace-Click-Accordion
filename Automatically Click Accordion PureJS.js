<!-- Automatically Click Accordion -->
<!-- Open an accordion item automatically on page load -->
<!-- based on the accordion id passed to the url -->
<!-- Non jQuery version -->
<!-- Developed by Alan Moore(webmaster @ poochkingdom.com) -->
<script type="text/javascript">
var debug = false;
window.addEventListener('DOMContentLoaded', function () {
  if(window.location.hash.length) {
	<!-- Try to find a matching element -->
    var loc = document.querySelector(window.location.hash);
	if(debug) console.log(loc);
    <!-- If there's a matching element in the page -->
    if (loc != null){
      <!-- Execute the click event on the matching element -->
      loc.click();
    }
  }
});
</script>
<!-- End Automatically Click Accordion -->