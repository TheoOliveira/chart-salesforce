({	// controller js padrão puxa o metodo do apex 
	ctr : function(cmp, event, helper) {
        var temp = [];
        var action = cmp.get("c.getChartMap");
        action.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp = response.getReturnValue();
                console.log(response.getState());
                console.log(temp);
                helper.createGraph(cmp, temp);
            }
        });      
          
       $A.enqueueAction(action);	
       
	}
})