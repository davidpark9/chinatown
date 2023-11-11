
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Progressive Line Chart",
      borderColor: "blue",
      data: [0, 10, 20, 30, 40],
      fill: false,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    animation: {
      duration: 8000, 
      easing: "linear",
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
};

const ctx = document.getElementById("progressiveLineChart").getContext("2d");
const chart = new Chart(ctx, config);


function updateChartData() {
  const newData = [0, 20, 40, 60, 80]; 
  chart.data.datasets[0].data = newData;
  chart.update();
}


setTimeout(updateChartData, 1000);
