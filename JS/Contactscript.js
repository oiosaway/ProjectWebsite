$(document).ready(function()
	{



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