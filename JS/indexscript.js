$(document).ready(function()
	{

    $("h1").slideDown(1000,showh2());

    function showh2(){
      $("h2").slideDown(2000);
    }

		$(".btn").mouseenter(
    function()
    {
       $(this).attr("id",""); 
   			$(this).animate({bottom:"10px"},400);}
     );
       
       $(".btn, .btn-facebook").mouseleave(
    function()
    {
       $(this).attr("id","special-buttons-color");
        $(this).animate({bottom:"0px"},400);}
     );

       $('#aboutmebutton').on('click',function(){
 
      $('#aboutmediv').slideToggle();
 
   });

	});