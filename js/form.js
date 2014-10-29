jQuery.noConflict();
(function( $ ) {
  $(function() {
    $("#signUp").remove();
    $("#signIn > h2").text("Sign In or Sign Up");

    var checkbox = CreateNewUserCheckbox($);
    $(checkbox).insertAfter("#email");

    $("#newUserCheckbox").click(function() {
      if ($(this).is(":checked")) {
        var parent = $("#accountForm");
        var confirmPasswordContainer = CreateFormInput($, "password", "Confirm Password", "confirmPassword");
        $(confirmPasswordContainer).insertAfter($("#password"));

        var fullNameInputContainer = CreateFormInput($, "text", "Full Name", "fullName");
        $(fullNameInputContainer).insertAfter(confirmPasswordContainer);
        $("#loginButton").val("Sign Up");
      } else {
        $("#confirmPassword").remove();
        $("#fullName").remove();
        $("#loginButton").val("Log In");
      }
    });
  });
})(jQuery);

function CreateNewUserCheckbox($) {
  //Create the surrounding div
  var container = document.createElement("div");
  $(container).attr("id", "newUser");

  var checkbox = document.createElement("input");
  $(checkbox).attr("id", "newUserCheckbox").attr("name", "isNewUser").attr("type", "checkbox").appendTo(container);

  var label = document.createElement("label");
  $(label).attr("for", "newUserCheckbox").text("I'm new here").appendTo(container);

  return container;
}

function CreateFormInput($, type, labelText, id) {
  //Create the surrounding div
  var container = document.createElement("div");
  $(container).attr("id", id);

  var label = document.createElement("label");
  $(label).attr("for", id.concat("Input")).text(labelText).appendTo(container);

  var input = document.createElement("input");
  $(input).attr("id", id.concat("Input")).attr("name", id).attr("type", type).appendTo(container);

  return container;
}
