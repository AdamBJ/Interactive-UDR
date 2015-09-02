var lwrDivCourses_count = 0;
var specialReqs_count = 0;
var upperDivCourses_count = 0;
var cmpt354_count = 0;





$( document ).ready(function() {

    //Main table row 1
		$("#CMPT310cb").click(function(){	
		    if($(this).is(":checked")){
		    	lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		    	lwrDivCourses_count--;
		    	if (lwrDivCourses_count == 0) {
		    		$("#lwrDivCourses").removeClass("redBackground");  
		    	}
		    }
		});

		$("#CMPT361cb").click(function(){	
		    if($(this).is(":checked")){
		    	lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		    	lwrDivCourses_count--;
		    	if (lwrDivCourses_count == 0) {
		    		$("#lwrDivCourses").removeClass("redBackground");  
		    	}
		    }
		});

		$("#CMPT300cb").click(function(){	
		    if($(this).is(":checked")){
		    	lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		    	lwrDivCourses_count--;
		    	if (lwrDivCourses_count == 0) {
		    		$("#lwrDivCourses").removeClass("redBackground");  
		    	}
		    }
		});

		$("#CMPT301cb").click(function(){	
		    if($(this).is(":checked")){
		    	lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		    	lwrDivCourses_count--;
		    	if (lwrDivCourses_count == 0) {
		    		$("#lwrDivCourses").removeClass("redBackground");  
		    	}
		    }
		});

		$("#CMPT373cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");   
		        $("#specialReqs").addClass("redBackground"); 
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		        $("#specialReqs").removeClass("redBackground");  
		    }
		});

		$("#CMPT307cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});
	// Main table row 2
		$("#CMPT340cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        $("#specialReqs").addClass("redBackground"); 

		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");
		        $("#specialReqs").removeClass("redBackground");  
		    }
		});

		$("#CMPT363cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT305cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT354cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT375cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT308cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

	// Main Table Row 3 
		$("#CMPT411cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#upperDivCourses").addClass("redBackground"); 
		    }else{
		        $("#upperDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT365cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT371cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");   
		    }
		});

		$("#CMPT370cb").click(function(){	
		    if($(this).is(":checked")){
		    	$("#CMPT354td").addClass("redBackground");
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");
		        $("#CMPT354td").removeClass("redBackground");   
		    }
		});

		$("#CMPT383cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground"); 
		    }
		});

		$("#CMPT404cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground"); 
		        $("#specialReqs").addClass("redBackground");
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT412cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#upperDivCourses").addClass("redBackground"); 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		    }else{
		        $("#upperDivCourses").removeClass("redBackground");   
		        $("#lwrDivCourses").removeClass("redBackground"); 
		    }
		});

		$("#CMPT461cb").click(function(){	
		    if($(this).is(":checked")){
		    	$("#CMPT361td").addClass("redBackground");
		    	$("#MACM316td").addClass("redBackground");
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground"); 
		        $("#specialReqs").addClass("redBackground");  
		    }else{
		        $("#CMPT361td").removeClass("redBackground");
		    	$("#MACM316td").removeClass("redBackground");
		        $("#lwrDivCourses").removeClass("redBackground");
		        $("#specialReqs").removeClass("redBackground"); 
		    }
		});

		$("#CMPT379cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground"); 
		    }
		});

		$("#CMPT441cb").click(function(){	
		    if($(this).is(":checked")){
		    	$("#CMPT307td").addClass("redBackground");		        
		    }else{
		        $("#CMPT307td").removeClass("redBackground");   
		    }
		});

		$("#CMPT384cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground"); 
		    }
		});

		$("#CMPT405cb").click(function(){	
		    if($(this).is(":checked")){
		    	$("#CMPT307td").addClass("redBackground");		        
		    }else{
		        $("#CMPT307td").removeClass("redBackground");   
		    }
		});

		$("#CMPT413cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		    }
		});

		$("#CMPT464cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#specialReqs").addClass("redBackground"); 
		        $("#CMPT361td").addClass("redBackground");
		        $("#MACM316td").addClass("redBackground");
		        
		    }else{
		        $("#specialReqs").removeClass("redBackground"); 
		        $("#CMPT361td").removeClass("redBackground"); 
		        $("#MACM316td").removeClass("redBackground"); 
		    }
		});

		$("#CMPT454cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT300td").addClass("redBackground");
		        $("#CMPT354td").addClass("redBackground");
		        
		    }else{
		        $("#CMPT300td").removeClass("redBackground"); 
		        $("#CMPT354td").removeClass("redBackground"); 
		    }
		});

		$("#CMPT473cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT373td").addClass("redBackground"); 		        
		    }else{
		        $("#CMPT373td").removeClass("redBackground");  
		    }
		});

		$("#CMPT414cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#upperDivCourses").addClass("redBackground"); 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground"); 
		        $("#specialReqs").addClass("redBackground"); 
		        
		    }else{
		        $("#upperDivCourses").removeClass("redBackground"); 
		        $("#lwrDivCourses").removeClass("redBackground"); 
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT466cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT361td").addClass("redBackground");
		        $("#MACM316td").addClass("redBackground");
		        $("#specialReqs").addClass("redBackground");
		        
		    }else{
		        $("#CMPT361td").removeClass("redBackground"); 
		        $("#MACM316td").removeClass("redBackground");
		        $("#specialReqs").removeClass("redBackground"); 
		    }
		});

		$("#CMPT431cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#specialReqs").addClass("redBackground"); 
		        $("#CMPT300td").addClass("redBackground");
		        
		    }else{
		        $("#specialReqs").removeClass("redBackground"); 
		        $("#CMPT300td").removeClass("redBackground");  
		    }
		});

		$("#CMPT456cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT354td").addClass("redBackground"); 		        
		    }else{
		        $("#CMPT354td").removeClass("redBackground");  
		    }
		});

		$("#CMPT475cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#upperDivCourses").addClass("redBackground"); 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        $("#specialReqs").addClass("redBackground");
		        
		    }else{
		        $("#upperDivCourses").removeClass("redBackground"); 
		        $("#lwrDivCourses").removeClass("redBackground"); 
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT407cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT307td").addClass("redBackground"); 		        
		    }else{
		        $("#CMPT307td").removeClass("redBackground");  
		    }
		});

		$("#CMPT417cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		    }
		});

		$("#CMPT467cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT361td").addClass("redBackground"); 
		        $("#MACM316td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT361td").removeClass("redBackground");  
		        $("#MACM316td").removeClass("redBackground");
		    }
		});

		$("#CMPT459cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT354td").addClass("redBackground"); 		        
		    }else{
		        $("#CMPT354td").removeClass("redBackground");  
		    }
		});

		$("#CMPT477cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  		        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		    }
		});

		$("#CMPT408cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT307td").addClass("redBackground"); 
		        $("#CMPT371td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT307td").removeClass("redBackground");  
		        $("#CMPT371td").removeClass("redBackground");
		    }
		});

		$("#CMPT418cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT468cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT433cb").click(function(){	
		    if($(this).is(":checked")){
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  
		        $("#CMPT300td").addClass("redBackground"); 			        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");  
		        $("#CMPT300td").removeClass("redBackground");
		    }
		});

		$("#CMPT470cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#CMPT354td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT354td").removeClass("redBackground");
		    }
		});

		$("#CMPT409cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#CMPT307td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT307td").removeClass("redBackground");
		    }
		});

		$("#CMPT469cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#CMPT361td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT361td").removeClass("redBackground");
		    }
		});

		$("#CMPT471cb").click(function(){	
		    if($(this).is(":checked")){
		        $("#CMPT300td").addClass("redBackground"); 
		        $("#CMPT371td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT300td").removeClass("redBackground");  
		        $("#CMPT371td").removeClass("redBackground");
		    }
		});

		$("#CMPT474cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#CMPT371td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT371td").removeClass("redBackground");
		    }
		});

		$("#CMPT479cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#CMPT489cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#CMPT383td").addClass("redBackground"); 			        
		    }else{
		        $("#CMPT383td").removeClass("redBackground");
		    }
		});

		$("#CMPT499cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#MACM316cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 	
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  		        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		        $("#lwrDivCourses").removeClass("redBackground"); 
		    }
		});

		$("#MATH308cb").click(function(){	
		    if($(this).is(":checked")){ 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground");  			        
		    }else{
		        $("#lwrDivCourses").removeClass("redBackground");
		    }
		});

		$("#MACM401cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		    }
		});

		$("#MATH343cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		        $("#lwrDivCourses").removeClass("redBackground");
		    }
		});

		$("#MACM416cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 
		        $("#MACM316td").addClass("redBackground");			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		        $("#MACM316td").removeClass("redBackground");
		    }
		});

		$("#CMPT320CMNS353cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 
		        lwrDivCourses_count++;
		        $("#lwrDivCourses").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		        $("#lwrDivCourses").removeClass("redBackground");
		    }
		});

		$("#CMPT497cb").click(function(){	
		    if($(this).is(":checked")){ 
		        $("#specialReqs").addClass("redBackground"); 			        
		    }else{
		        $("#specialReqs").removeClass("redBackground");
		    }
		});




});