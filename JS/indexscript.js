$(document).ready(function()
	{

    $("#name").show(1000);

      $("#class").show(1700);

      $("#school").show(2100);
    

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

       $('#aboutmebutton').click(function(){
 
      $('#aboutmediv').slideToggle();
 
   });

	});