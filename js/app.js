/*	Handle Initial function calls and/or Major UI changes	*/

//Problem: No user interaction causes no change to application
//Solution: Allow user intreaction on drawing pad, buttons and andNewColor.

var color = $('.selected').css("background-color");
var $controls = $('.controls ul');
var $controlsElements = $('.controls li');
//When clicking on control list items

$controlsElements.click(function(){
	console.log('clicked controls');
	//Deselect sibling elements
	$controlsElements.siblings().removeClass('selected');
	//Select clicked element
	$(this).addClass('selected');
	
	//cache current color
	color = $(this).css('background-color');
	console.log(color);
});	

//When clicking 'newColor'
$('#revealColorSelect').click(function(){
	//Show colorSelect or hide colorSelect
	changeColor();
	$('#colorSelect').toggle();
	
	/*  Brute force Method*/
	//	var currentStatus = $colorSelect.css('display');
	//	console.log(currentStatus);
	//	console.log(typeof(currentStatus));
	//	if(currentStatus === 'none'){
	//		$colorSelect.css('display', 'block');
	//	}else{
	//		$colorSelect.css('display', 'none');
	//	}
});

//update 'newColor' span
function changeColor(){
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();
	
	console.log('rgb(' +r+ ',' +g+ ',' +b+ ')');
	$('#newColor').css('background-color', 'rgb(' +r+ ',' +g+ ',' +b+ ')');
	
}

//While color sliders change 
$('input[type=range]').on('input', changeColor);
	
//When 'addColor' is clicked
$('#addNewColor').click(function(){
	var color1 = $('#newColor').css('background-color');
	$controlsElements.siblings().removeClass('selected');
	var colorListElement = '<li class="selected" style="background:'+ color1+'"></li>';
	$controls.append(colorListElement);
	console.log(color1);
	console.log(colorListElement);
	color = color1;
});
	//Append color to 'ul' list controls
	//Select the newColor with white circle

//On Mouse events ons canvas
	//Draw lines --> (PURE JAVASCRIPT)

//global variable
var lastEvent; 
var mouseDown = false;

var context = $('canvas')[0].getContext('2d');

var $canvas = $('canvas');
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if (mouseDown){
    context.beginPath();
    //CONFUSED ABOUT DIFFERENCE BETWEEN lastEvent AND e!!
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});



