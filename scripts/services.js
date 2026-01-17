$("#servicesForm").submit(function (event) {

  event.preventDefault();
  //console.log(event);
$("#serviceName").css("border", "");
$("#serviceDescription").removeAttr("style");
$("#servicePrice").removeAttr("style");


  const name = $("#serviceName").val().trim();
  const description = $("#serviceDescription").val().trim();
  const price = $("#servicePrice").val();


  if (!name) {
    $("#serviceName").css("border", "3px solid red");
  }
  if (!description) {
    $("#serviceDescription").css("border", "3px solid red");
  }
  if (!price || price <= 0) {
    $("#servicePrice").css("border", "3px solid red");
  } else {
 
  }

    this.reset();
});
