$(document).ready(function() {
	//add an elementFromPoint
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	$("body div").append(txt);
	
	//add a class to an element
	$("body div h1").addClass("title");
	
	//add an ID to an element
	$("body div h1").attr("id","title1");
	
	//add 10 paragraph elements in a "for" loop, giving each a unique ID
	for(var i=0; i<10; i++){
		var txt = document.createElement("p");
		txt.innerHTML = "This is a paragraph " + i + ".";
		txt.id = "p" + (i+"").padStart(3,"0");
		$("body div").append(txt);
	}
	
	//change paragraph text if clicked
	$("p").click(function() {$(this).text("Hey, the text changed!")});
	
	//use "each" loop to console-log ids of each paragraph element
	var elems = document.getElementsByTagName("p");
	console.log(elems);
	$.each(elems, function(index,value) {
		console.log(elems[index].id);
	});
	
	//use "$(selector).each" loop to console-log hover message
	$("p").each(function() {
		$(this).hover(function() {
			console.log("hovered over " + this.id);
		});
	});
	
	//toggle() method switches between show() and hide()
	$(".trigger").click(function() {
		$(".overlay").toggle();
		
	});
	
	// add 5 new paragraphs which open up Bootstrap modals when the user clicks on the paragraph
	for(var i=0; i<5; i++){
		txt = '<!-- Trigger the modal with a button --><p  data-toggle="modal" data-target="#myModal[i]">Open Small Modal</p><!-- Modal --><div class="modal fade" id="myModal[i]" role="dialog"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><p>This is a small modal [i]</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
		$("body div").append(txt);
	}
	
	
});