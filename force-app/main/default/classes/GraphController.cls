public class GraphController {
    
    
    // Map list to populate the ChartJs with mocked data
    @auraEnabled
    public static Map<string, integer> getChartMap(){
        Map<string, integer> mp = new Map<string, integer>();        
        mp.put('Jan', 45);
        mp.put('Feb', 50);
        mp.put('Mar', 30);
        mp.put('Apr', 36);
        mp.put('May', 42);
        mp.put('Jun', 39);
        mp.put('Jul', 41);
        mp.put('Aug', 36);
        mp.put('Sep', 43);
        mp.put('Oct', 45);
        mp.put('Nov', 33);
        mp.put('Dec', 53);
        
        return mp;
    }
    
    
}
