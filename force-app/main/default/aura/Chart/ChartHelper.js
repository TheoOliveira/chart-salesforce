({ // puxa o map do apex e joga o key para label e o outro para data
    createGraph : function(cmp, temp) {
        
        var dataMap = {"chartLabels": Object.keys(temp),
                       "chartData": Object.values(temp)
                       };
        
        var el = cmp.find('barChart').getElement();
        var ctx = el.getContext('2d');
        
        if(el.id == 'barChart'){
            console.log('não invertido');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataMap.chartLabels,
                    datasets: [
                        {
                            label: "Payments History",
                            backgroundColor: "rgba(153,255,51,0.5)",
                            data: dataMap.chartData
                        }
                    ]
                },             
            });
        }if(el.id == 'barChartInverted'){
            console.log('invertido');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dataMap.chartLabels,
                    datasets: [
                        {
                            label: "Payments History",
                            backgroundColor: "rgba(153,255,51,0.5)",
                            data: dataMap.chartData
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                    reverse: true,
                                beginAtZero:true
                            }
                        }],
                        xAxes: [{
                                ticks: {
                                reverse: true,
                              beginAtZero: true
                            }
                        }]
                    }
                }             
            });
        }
        
        
    },
	

    
    
})