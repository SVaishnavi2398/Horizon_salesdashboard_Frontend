import { ChartType } from './dashboard.model';

const transactions = [
    {
        id: '#MB2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: 'Paid',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        id: '#MB2541',
        name: 'Jamal Burnett',
        date: '07 Oct, 2019',
        total: '$380',
        status: 'Chargeback',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        id: '#MB2542',
        name: 'Juan Mitchell',
        date: '06 Oct, 2019',
        total: '$384',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        id: '#MB2543',
        name: 'Barry Dick',
        date: '05 Oct, 2019',
        total: '$412',
        status: 'Paid',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        id: '#MB2544',
        name: 'Ronald Taylor',
        date: '04 Oct, 2019',
        total: '$404',
        status: 'Refund',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    },
    {
        id: '#MB2545',
        name: 'Jacob Hunter',
        date: '04 Oct, 2019',
        total: '$392',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6
    }
];

const lineColumAreaChart: ChartType = {
    chart: {
        height: 320,
        type: 'bar',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '30%'
        }
    },
    colors: ['#556ee6', '#dcdfe3', '#f1b44c'],
    series: [
    {
        name: 'Desktops',
        type: 'column',
        data: [2, 2, 1, 1]
    }, 
    ],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['Website','Web Call','Channel Partner','Housingpushall'],
    xaxis: {
        type: 'Text',
    },
    yaxis: {
        title: {
            text: 'Points',
        },
    },
    grid: {
        borderColor: '#5b73e8'
    }
};

const revenueColumnChart: ChartType = {
    chart: {
        width: 80,
        height: 40,
        type: 'bar',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },
    colors: ['#556ee6'],
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 44, 54]
    }],
    fill: {
        opacity: 0.9
    },
    grid: {
        borderColor: '#f1f1f1'
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: (val) => {
                return val;
            }
        },
    }
};

const customerRadialBarChart: ChartType = {
    series: ['55'],
    chart: {
        type: 'radialBar',
        width: 45,
        height: 45,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#556ee6'],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    }
};

const orderRadialBarChart: ChartType = {
    series: ['70'],
    chart: {
        type: 'radialBar',
        width: 45,
        height: 45,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#34c38f'],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '60%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    }
};

const growthColumnChart: ChartType = {
    chart: {
        width: 80,
        height: 40,
        type: 'bar',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '100%'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },
    colors: ['#f1b44c'],
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    fill: {
        opacity: 0.9
    },
    grid: {
        borderColor: '#f1f1f1'
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: (val) => {
                return val;
            }
        },
    }
};

export { transactions, lineColumAreaChart, revenueColumnChart, customerRadialBarChart, orderRadialBarChart, growthColumnChart };

