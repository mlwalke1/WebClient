$(document).ready(function() {
  $('#tblData').on('click', '.delete', function() {
    $(this).closest('tr').fadeOut(500, function() {
     $(this).closest('tr').remove();
    });
  });

  $("#tblData tr:has(th)").mouseover(function(e) {
    $(this).css("cursor", "pointer");
  });
  $("#tblData th").click(function() {
    var iIndex = $(this).closest("th").prevAll("th").length;
    $(this).parents("#tblData").find("tr").each(function() {
      $(this).find("td:eq(" + iIndex + ")").remove();
      $(this).find("th:eq(" + iIndex + ")").remove();
    });
  });

	$('#tblData tr:first').append("<th>Insert</th>");
	$('#tblData').find('tr').each(function(){
		$(this).find('td').eq(3).after(
			'<td><input class="insert" type="button" value="Insert" /></td>');
	});

});