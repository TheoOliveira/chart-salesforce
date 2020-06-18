({	
	ctr : function(cmp, event, helper) {
        var temp = [];
        var temp1 = [];
        var temp2 = [];
        var temp3 = [];

        var action = cmp.get("c.getChartMap");
        action.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp = response.getReturnValue();
                helper.createGraphAumentoLimite(cmp, temp);
            }
        });
        var action1 = cmp.get("c.getChartMap");
        action1.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp1 = response.getReturnValue();
                helper.createGraphAlteracaoExposicao(cmp, temp1);
            }
        });
        var action2 = cmp.get("c.getChartMap");
        action2.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp2 = response.getReturnValue();
                helper.createGraphAlteracaoFaturamento(cmp, temp2);
            }
        });
        
        var action3 = cmp.get("c.getChartMap");
        action3.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS' && response.getReturnValue()){
                temp3 = response.getReturnValue();
                helper.createGraphTaxasTarifas(cmp, temp3);
            }
        });
         
       $A.enqueueAction(action);
       $A.enqueueAction(action1);
       $A.enqueueAction(action2);	
       $A.enqueueAction(action3);	


       
	}
})
