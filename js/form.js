jQuery.noConflict();
(function( $ ) {
  $(function() {
    var checkbox = CreateNewUserCheckbox();
    jQuery(checkbox).insertAfter("#email");
    
    $("#newboxInput").click(function() {
      if($(this).is(":checked")) {
        var parent = jQuery("#accountForm");
        var confirmPasswordRow = CreateInputRow("password", "Confirm Password", "confirmPassword");
        jQuery(confirmPasswordRow).insertAfter(jQuery("#password"));
        
        var fullNameRow = CreateInputRow("text", "Full Name", "name");
        jQuery(fullNameRow).insertAfter(confirmPasswordRow);
        
        jQuery("#loginButton").val("Sign Up");
      } else {
        jQuery("#confirmPassword").remove();
        jQuery("#name").remove();
        jQuery("#loginButton").val("Log In");
      }
    });
  });
})(jQuery);

function CreateInputRow(type, labelText, id) {
  //Create the entire row
  var row = document.createElement("div");
  jQuery(row).addClass("row");
  jQuery(row).attr("id", id);
  
  //Create the two columns to surround our content
  var dummyColumn = document.createElement("div");
  var dummyColumn2 = document.createElement("div");
  jQuery(dummyColumn).addClass("col-1-3").appendTo(row);
  
  //Create the column that will contain our content
  var contentColumn = document.createElement("div");
  jQuery(contentColumn).addClass("col-1-3").appendTo(row);
  jQuery(dummyColumn2).addClass("col-1-3").appendTo(row);  
  
  //Create the row inside our content column
  var innerRow = document.createElement("div");
  jQuery(innerRow).addClass("row").appendTo(contentColumn);
  
  //Create the column for our label
  var labelColumn = document.createElement("div");
  jQuery(labelColumn).addClass("col-1-3 right-align").appendTo(innerRow);
  
  var label = document.createElement("label");
  jQuery(label).text(labelText);
  jQuery(label).attr("for", id.concat("Input")).appendTo(labelColumn);
  
  var inputColumn = document.createElement("div");
  jQuery(inputColumn).addClass("col-2-3").appendTo(innerRow);
  
  var input = document.createElement("input");
  jQuery(input).attr("id", id.concat("Input")).attr("name", id).attr("type", type).appendTo(inputColumn);
  return row;
}

function CreateNewUserCheckbox() {
  //Create the entire row
  var row = document.createElement("div");
  jQuery(row).addClass("row");
  jQuery(row).attr("id", "newbox");
  
  //Create the two columns to surround our content
  var dummyColumn = document.createElement("div");
  var dummyColumn2 = document.createElement("div");
  jQuery(dummyColumn).addClass("col-1-3").appendTo(row);
  
  //Create the column that will contain our content
  var contentColumn = document.createElement("div");
  jQuery(contentColumn).addClass("col-1-3").appendTo(row);
  jQuery(dummyColumn2).addClass("col-1-3").appendTo(row);
  
  //Create the row inside our content column
  var innerRow = document.createElement("div");
  jQuery(innerRow).addClass("row").appendTo(contentColumn);
  
  //Create inner most column
  var innerColumn = document.createElement("div");
  jQuery(innerColumn).addClass("col-1-3 right-align").appendTo(innerRow);
  
  var checkbox = document.createElement("input");
  jQuery(checkbox).attr("id", "newboxInput").attr("name", "isnew").attr("type", "checkbox").appendTo(innerColumn);
  
  var label = document.createElement("label");
  jQuery(label).attr("for", "newboxInput").text("I'm new here").appendTo(innerColumn);
  
  return row;
}