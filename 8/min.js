$("#enable").click(function(){
        jQuery.fx.off = false;
    }); 

$("#disable").click(function(){
        jQuery.fx.off = true;
    });
 
 $("#toggle").click(function(){
        $("div").toggle("slow");
    });
