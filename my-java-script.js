document.addEventListener("DOMContentLoaded",
function()  {
  // alert("Hello Wolrd");
  console.log("Heyy");

  let myPhoto =
  document.getELementById("personal-image")

  myPhoto.addEventListener("click",changedImage)

  function changedImage(){
    console.log("heyyy");
    myPhoto.src = "happyface"
  }







 //all of your code goes here
}) // END OF DOM CONTENT LOADED
