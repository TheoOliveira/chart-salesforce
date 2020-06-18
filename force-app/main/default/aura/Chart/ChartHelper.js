({
    createGraphAumentoLimite: function(cmp, temp) {
      var dataMap = {
        chartLabels: Object.keys(temp),
        chartData: Object.values(temp)
      };
      var scopeOptions = {
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        responsive: false,
  
        legend: {
          display: true,
          position: "bottom"
        },
        tooltips: {
          enabled: false
        },
  
        scales: {
          xAxes: [
            {
              display: true, //this will remove all the x-axis grid lines
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff",
                fontStyle: "normal",
                fontSize: 13,
  
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        hover: {
          animationDuration: 0
        },
        animation: {
          duration: 1,
          onComplete: function() {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
  
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
  
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                function retornaReal(currencyData) {
                  var data =
                    "R$" +
                    String(currencyData).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return data;
                }
  
                ctx.fillText(retornaReal(data), bar._model.x, bar._model.y - 5);
              });
            });
          }
        }
      };
      //GRAFICO PARA ALTERAÇÃO DE LIMITE
      var el = cmp.find("aumentoChart").getElement();
      var ctx = el.getContext("2d");
  
      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            }
          ]
        },
        options: scopeOptions
      });
    },
    createGraphAlteracaoExposicao: function(cmp, temp1) {
      var dataMap = {
        chartLabels: Object.keys(temp1),
        chartData: Object.values(temp1)
      };
      //GRAFICO PARA ALTERAÇÃO EXPOSIÇÃO
      var scopeOptions = {
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        responsive: false,
  
        legend: {
          display: true,
          position: "bottom"
        },
        tooltips: {
          enabled: false
        },
  
        scales: {
          xAxes: [
            {
              display: true, //this will remove all the x-axis grid lines
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff",
                fontStyle: "normal",
                fontSize: 13,
  
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        hover: {
          animationDuration: 0
        },
        animation: {
          duration: 1,
          onComplete: function() {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
  
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
  
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                function retornaReal(currencyData) {
                  var data =
                    "R$" +
                    String(currencyData).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return data;
                }
                ctx.fillText(retornaReal(data), bar._model.x, bar._model.y - 5);
              });
            });
          }
        }
      };
  
      var el = cmp.find("exposicaoChart").getElement();
      var ctx = el.getContext("2d");
  
      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            }
          ]
        },
        options: scopeOptions
      });
    },
    createGraphAlteracaoFaturamento: function(cmp, temp2) {
      var dataMap = {
        chartLabels: Object.keys(temp2),
        chartData: Object.values(temp2)
      };
      // GRÁFICO PARA ALTERAÇÃO FATURAMENTO
      var scopeOptions = {
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        responsive: false,
  
        legend: {
          display: true,
          position: "bottom"
        },
        tooltips: {
          enabled: false
        },
  
        scales: {
          xAxes: [
            {
              display: true, //this will remove all the x-axis grid lines
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff",
                fontStyle: "normal",
                fontSize: 17,
  
                beginAtZero: true,
                reverse: false
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
                reverse: true
              }
            }
          ]
        },
        hover: {
          animationDuration: 0
        },
        animation: {
          duration: 1,
          onComplete: function() {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
  
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
  
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                function retornaReal(currencyData) {
                  var data =
                    "R$" +
                    String(currencyData).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return data;
                }
                ctx.fillText(retornaReal(data), bar._model.x, bar._model.y + 15);
              });
            });
          }
        }
      };
  
      var el = cmp.find("faturamentoChart").getElement();
      var ctx = el.getContext("2d");
  
      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            }
          ]
        },
        options: scopeOptions
      });
    },
    createGraphTaxasTarifas: function(cmp, temp3) {
      var dataMap = {
        chartLabels: Object.keys(temp3),
        chartData: Object.values(temp3)
      };
      // GRÁFICO ALTERAÇÃO TAXAS E TARIFAS
      var scopeOptions = {
        categoryPercentage: 0.7,
        barPercentage: 1.0,
        responsive: false,
  
        legend: {
          display: true,
          position: "bottom"
        },
        tooltips: {
          enabled: false
        },
  
        scales: {
          xAxes: [
            {
              display: true, //this will remove all the x-axis grid lines
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#fff",
                fontStyle: "normal",
                fontSize: 13,
  
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        hover: {
          animationDuration: 0
        },
        animation: {
          duration: 1,
          onComplete: function() {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
  
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
  
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                var data = dataset.data[index];
                function retornaReal(currencyData) {
                  var data =
                    "R$" +
                    String(currencyData).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return data;
                }
                ctx.fillText(retornaReal(data), bar._model.x, bar._model.y - 5);
              });
            });
          }
        }
      };
  
      var el = cmp.find("taxaChart").getElement();
      var ctx = el.getContext("2d");
  
      new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(44, 130, 201, 1)",
              data: dataMap.chartData
            },
            {
              label: dataMap.chartLabels,
              backgroundColor: "rgba(245, 171, 53, 1)",
              data: dataMap.chartData
            }
          ]
        },
        options: scopeOptions
      });
    }
  });
  