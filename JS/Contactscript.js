$(document).ready(function()
	{



       $("#contactForm").validate(
        {
          rules:
          {
            myname:
            {
              required:true
            },
            myemail:
            {
              required:true,
              email:true
            },
            myphone:
            {
              required:true,
              digits:true
            }
            ,
            mymessage:
            {
              required:true,
              maxlength:2000
            }


          }
        }

          );

       
        
	});