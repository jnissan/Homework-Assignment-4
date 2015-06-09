	
	console.log ("hello")

    // $(document).ready(function() {
    //     console.log( "document loaded" );
    // });
 
 // 	$(".button blue").click(preventClick);
 // 	function preventClick(){
 //  	click.preventDefault();
	// });

// When Read More is clicked, text slides down, Read More hides and Read Less appears

$(".readmore a").click(function(event){
	event.preventDefault();
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless").show();
})

$(".readless").click(function(event){
	event.preventDefault();
	$("#show-this-on-click").slideUp(function(){
		$(".readmore").show();
		$(".readless").hide();
	});
})

$(".learnmore").click(function(event){
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
})