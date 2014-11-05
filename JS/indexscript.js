$(document).ready(function()
	{
		$(".btn, .btn-facebook").mouseenter(
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



       var curScroll = 0;

	});