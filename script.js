// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '台灣南部地區月均溫圖'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.cwa.gov.tw/V8/C/C/Statistics/monthlymean.html" ' +
            'target="_blank">中央氣象局_月均溫</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: '溫度'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '高雄',
        marker: {
            symbol: 'square'
        },
        data: [ 
            19.7,
            20.7,
            23.0,
            25.7,
            27.8,
            28.9,
            29.4,
            28.9,
            28.5,
            26.9,
            24.5,
            21.2]

    }, {
        name: '恆春',
        marker: {
            symbol: 'circle'
        },
        data: [ 21.1,
            21.7,
            23.3,
            25.4,
            27.3,
            28.4,
            28.7,
            28.3,
            27.8,
            26.5,
            24.7,
            22.2]
    },{
        name: '臺南',
        marker: {
            symbol: 'diamond'
        },
        data: [ 17.8,
            18.9,
            21.6,
            24.9,
            27.5,
            28.9,
            29.4,
            28.9,
            28.6,
            26.3,
            23.4,
            19.6
            ]
    }]
});
