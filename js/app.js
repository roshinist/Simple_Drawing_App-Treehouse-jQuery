/*	Handle Initial function calls and/or Major UI changes	*/

//Problem: No user interaction causes no change to application
//Solution: Allow user intreaction on drawing pad, buttons and andNewColor.

//When clicking on control list items
var $controls = $('.controls li');
$controls.click(function(){
	console.log('clicked controls');
	//Deselect sibling elements
	$controls.siblings().removeClass('selected');
	//Select clicked element
	$(this).addClass('selected');
});	

//When clicking 'newColor'
$('#revealColorSelect').click(function(){
	//Show colorSelect or hide colorSelect
	var $colorSelect = $('#colorSelect');
	var currentStatus = $colorSelect.css('display');
	console.log(currentStatus);
	console.log(typeof(currentStatus));
	if(currentStatus === 'none'){
		$colorSelect.css('display', 'block');
	}else{
		$colorSelect.css('display', 'none');
	}
});
	
//While color sliders change 
	//update 'newColor' span

//When 'addColor' is clicked
	//Append color to 'ul' list controls
	//Select the newColor with white circle

//On Mouse events ons canvas
	//Draw lines --> (PURE JAVASCRIPT)




