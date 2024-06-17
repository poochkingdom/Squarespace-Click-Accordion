<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	<!-- Save the window location hash passed to this page -->
    var loc = window.location.hash;
	<!-- If a hash exists, and there's a matching element in the page -->
	if (loc.length && $(loc).length){
		<!-- Execute the click event on the matching element -->
		$(loc).click();
	}
});
</script>