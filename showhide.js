
    $(document). ready(function(){
      
      $('#mydiv3'). hide();
      $('#texthide1'). click(function () {
         if ($('#mydiv3'). is(':hidden')) {
              $('#mydiv3'). show();
          } else {
             $('#mydiv3'). hide();
          }
         });  
         $('#mydiv2'). hide();
          $('#texthide2'). click(function () {
          if ($('#mydiv2'). is(':hidden')) {
               $('#mydiv2'). show();
           } else {
              $('#mydiv2'). hide();
           }
          });
          $('#mydiv0'). hide();
          $('#texthide0'). click(function () {
          if ($('#mydiv0'). is(':hidden')) {
               $('#mydiv0'). show();
           } else {
              $('#mydiv0'). hide();
           }
          });
          $('#mydiv1'). hide();
          $('#texthide'). click(function () {
          if ($('#mydiv1'). is(':hidden')) {
               $('#mydiv1'). show();
           } else {
              $('#mydiv1'). hide();
           }
       });
       $('#sol'). hide();
       $('#btn'). click(function () {
       if ($('#sol'). is(':hidden')) {
            $('#sol'). show();
        }
    });
});

