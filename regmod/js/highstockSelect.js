$(function () {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {

        // split the data set into ohlc and volume
        var ohlc = [],
        volume = [],
        dataLength = data.length,
        // set the allowed units for data grouping
        groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
        ]],

        i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }


        // create the chart
        $('#container').highcharts('StockChart', {

            /*       rangeSelector: {
            selected: 1
            },

            title: {
            text: 'AAPL Historical'
            },
            */
            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },

                height: '0%',
                lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '0%',
                    height: '95%',
                    offset: 0,
                    lineWidth: 2
            }],

            series: [ {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                },
                cursor: 'pointer',
                point: {
                    events: {
                        click: function(e) {
                            alert("X("+this.x+"),Y("+this.y+")");
                        }//click
                    }//events
                }//point
            }],
            rangeSelector:{
                enabled:false
            }
        });
    });
});