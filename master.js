(function(){
$('.thumbInfo img').on('click', function(){

$.ajax({
url: "includes/ajaxQuery.php",
data: {model:this.id},
type: "GET"
}) //dont put a semicolon here so we can chain methods together

.done(function(data){
  console.log(data);

  if (data){
    data = JSON.parse(data);
    renderCarInfo(data);

  }else{
    alert ('your ajax call didnt work');
  }

}) //dont put ; here either

.fail(function(ajaxCall, status, error){

console.log(status, ",", error);
console.dir(ajaxCall); //outputs ajax call as object
}); //terminate ajax function

function renderCarInfo(car){
  $('.thumbInfo img').addClass('nonActive'); //these 2 add fade
  $('#' + car.model).removeClass('nonActive');

  $('.subhead span').text("mini cooper" + car.model);
  $('.modelName').text(car.modelName);
  $('.priceInfo').text(car.pricing);
  $('.modelDetails').text(car.modelDetails);
}

});
})();
