function displayOptions() 
{
  const searchOptions=document.getElementsByClassName("searchOptions")[0];
  const mainBody=document.getElementById("main");
  searchOptions.style.opacity="1"
  searchOptions.style.transition="all 0.3s"
  searchOptions.style.pointerEvents="all"
  mainBody.style.opacity="0.3";
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

/**************
 * Services Section tabs
 */
 $(document).ready(function(){    

    //Tabs
    //When page loads...
        $("body .tab-pane").addClass('hidden'); //Hide all content
        $("body ul.nav-tabs li:first-child").addClass("active").removeClass('hidden'); //Activate first tab
        $("body .tab-pane:first-child").removeClass('hidden'); //Show first tab content
     
        //On Click Event
        $("body ul.nav-tabs li").click(function() {
     
            $(this).siblings().removeClass('active'); //Remove any "active" class
            $(this).addClass('active'); //Add "active" class to selected tab
            $('body .tab-pane').addClass('hidden'); //Hide all tab content
     
            var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
            $(activeTab).removeClass('hidden');       //Fade in the active ID content
            $(activeTab).siblings().addClass('hidden');        
            return false;
        });
    //End Tabs
    
    });
