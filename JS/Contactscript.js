$(document).ready(function()
	{

		$(".btn").mouseenter(
    function()
    {
       $(this).attr("id",""); 
   			$(this).animate({bottom:"10px"},400);}
     );
       
       $(".btn").mouseleave(
    function()
    {
       $(this).attr("id","special-buttons-color");
        $(this).animate({bottom:"0px"},400);}
     );

	});