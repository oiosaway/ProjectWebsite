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


       $("#contactForm").validate(
        {
          rules:
          {
            fullname:
            {
              required:true
            },
            email:
            {
              required:true,
              email:true
            },
            phone:
            {
              required:true,
              digits:true
            }
            ,
            message:
            {
              maxlength:2000
            },


          }
        }

          );

       
        
	});