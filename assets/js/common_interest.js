$(document).ready(function() {
  $("button a").click(function(e) {
      e.preventDefault();
  });
});

function displayOptions() 
  {
    const searchOptions=document.getElementsByClassName("searchOptions")[0];
    const mainBody=document.getElementById("main");
    searchOptions.style.opacity="1"
    searchOptions.style.transition="all 0.3s"
    searchOptions.style.pointerEvents="all"
    mainBody.style.opacity="0";
    mainBody.style.transition="0.3s"   
  }
  function hideOptions() 
  {
    const searchOptions=document.getElementsByClassName("searchOptions")[0];
    const mainBody=document.getElementById("main");
    searchOptions.style.opacity = "0";
    searchOptions.style.pointerEvents="none"
    mainBody.style.opacity="1";
    mainBody.style.pointerEvents="all"
  }
  
  function displayDirectory()
  {
    const hostBody=document.getElementById("host-an-event");
    const directoryBody=document.getElementById("directorytable");
    console.log('what');
     directoryBody.style.display="block"
     directoryBody.style.transition="all 0.3s"
     directoryBody.style.pointerEvents="all"
     mainBody.style.opacity="0";
     mainBody.style.transition="0.3s"
  }
  
  
  function clickOnX() 
  {
   const hostBody=document.getElementById("host-an-event");
   const directoryBody=document.getElementById("directorytable");
   console.log('what');
   hostBody.style.display="none"
   hostBody.style.transition="all 0.3s"
   hostBody.style.pointerEvents="none"
   directoryBody.style.display="none"
   directoryBody.style.transition="all 0.3s"
   directoryBody.style.pointerEvents="none"
   mainBody.style.opacity="1";
   mainBody.style.transition="0.3s"
  }
  
  function displayHost()
  {
    const hostBody=document.getElementById("host-an-event");
    const directoryBody=document.getElementById("directorytable");
    console.log('what');
     hostBody.style.display="block"
     hostBody.style.transition="all 0.3s"
     hostBody.style.pointerEvents="all"
     mainBody.style.opacity="0";
     mainBody.style.transition="0.3s"
  }