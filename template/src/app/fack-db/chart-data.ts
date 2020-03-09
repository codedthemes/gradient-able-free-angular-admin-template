export class ChartDB {
  public static analyticsSeoCard = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ff5370'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#ff869a'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100, 100, 100]
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      data: [45, 35, 60, 50, 85, 70]
    }],
    yaxis: {
      min: 5,
      max: 90,
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => {
            return 'Ticket ';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  public static uniqueVisitorAnalytics = {
    chart: {
      height: 205,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    series: [{
      name: 'Arts',
      data: [20, 50, 30, 60, 30, 50]
    }, {
      name: 'Commerce',
      data: [60, 30, 65, 45, 67, 35]
    }],
    legend: {
      position: 'top',
    },
    xaxis: {
      type: 'datetime',
      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
      axisBorder: {
        show: false,
      },
      label: {
        style: {
          color: '#ccc'
        }
      },
    },
    yaxis: {
      show: true,
      min: 10,
      max: 70,
      labels: {
        style: {
          color: '#ccc'
        }
      }
    },
    colors: ['#73b4ff', '#59e0c5'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4099ff', '#2ed8b6'],
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      },
    },
    markers: {
      size: 5,
      colors: ['#4099ff', '#2ed8b6'],
      opacity: 0.9,
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    grid: {
      borderColor: '#cccccc3b',
    }
  };
  public static customerAnalytics1 = {
    chart: {
      height: 150,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        }
      }
    },
    labels: ['New', 'Return'],
    series: [39, 10],
    legend: {
      show: false
    },
    tooltip: {
      theme: 'datk'
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['#4680ff', '#2ed8b6'],
    fill: {
      opacity: [1, 1]
    },
    stroke: {
      width: 0,
    }
  };
  public static customerAnalytics2 = {
    chart: {
      height: 150,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        }
      }
    },
    labels: ['New', 'Return'],
    series: [20, 15],
    legend: {
      show: false
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      },
    },
    colors: ['#fff', '#2ed8b6'],
    fill: {
      opacity: [1, 1]
    },
    stroke: {
      width: 0,
    }
  };

  public static analyticsConversions1 = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#73b4ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0,
        gradientToColors: ['#4099ff'],
        inverseColors: true,
        opacityFrom: 0.99,
        opacityTo: 0.99,
        stops: [0, 100]
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25,
        44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static analyticsConversions2 = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#59e0c5'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0,
        gradientToColors: ['#2ed8b6'],
        inverseColors: true,
        opacityFrom: 0.99,
        opacityTo: 0.99,
        stops: [0, 100]
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44,
        12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static analyticsConversions3 = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ff869a'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0,
        gradientToColors: ['#ff5370'],
        inverseColors: true,
        opacityFrom: 0.99,
        opacityTo: 0.99,
        stops: [0, 100]
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85,
        63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };

  public static line1CAC = {
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
      width: 2,
    },
    stroke: {
      curve: 'straight',
    },
    colors: ['#4099ff'],
    series: [{
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f6ff', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };
  public static area1CAC = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#FFB64D', '#FF5370'],
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],

    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00'
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };
  public static bar1CAC = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0e9e4a', '#4099ff', '#FF5370'],
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52]
    }],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: (val) => '$ ' + val + ' thousands'
      }
    }
  };
  public static bar3CAC = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    colors: ['#4099ff', '#0e9e4a'],
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    series: [{
      data: [44, 55, 41, 64, 22, 43, 21]
    }, {
      data: [53, 32, 33, 52, 13, 44, 32]
    }],
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },

  };
  public static pie1CAC = {
    chart: {
      height: 320,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    series: [44, 55, 13, 43, 22],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  public static radialBar1CAC = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    colors: ['#4099ff'],
    series: [70],
    labels: ['Cricket'],
  };
  public static support1HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#7759de'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static support2HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static support3HACC = {
    chart: {
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#11c15b'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static satisfactionHACC = {
    chart: {
      height: 260,
      type: 'pie',
    },
    dataLabels: {
      enabled: false
    },
    series: [66, 50, 40, 30],
    labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
    legend: {
      show: true,
      offsetY: 50,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#4099ff',
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          height: 320,

        },
        legend: {
          position: 'bottom',
          offsetY: 0,
        }
      }
    }]
  };
}
