var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  data: {
    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    datasets: [ {
      label: "Current period",
      type: "bar",
      backgroundColor: "rgb(255, 193, 7)",
      borderColor: "#fff",
      borderWidth: 1,
      data: [408, 547, 675, 734, 878, 636, 221, 767, 878, 222, 898, 999],
    }, {
      label: "Previous period",
      type: "bar",
      backgroundColor: "#eee",
      borderColor: "#fff",
      borderWidth: 1,
            data: [133, 221, 783, 565, 408, 547, 675, 734, 878, 636, 534, 989]
    }
  ]
  }, 
  // The data for our dataset
  // data: {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [{
  //         label: 'My First dataset',

  //         data: [0, 10, 5, 2, 20, 30, 45]
  //     }]
  // },

  // Configuration options go here
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        gridLines: {
          drawOnChartArea: true
        }
      }]
    }
  }
});