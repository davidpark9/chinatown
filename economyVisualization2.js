// This page is david's part for the amount of businesses that opened during covid.

const data = {
  labels: [
    "Jan-2020",
    "Feb-2020",
    "Mar-2020",
    "Apr-2020",
    "May-2020",
    "Jun-2020",
    "Jul-2020",
    "Aug-2020",
    "Sep-2020",
    "Oct-2020",
    "Nov-2020",
    "Dec-2020",
    "Jan-2021",
    "Feb-2021",
    "Mar-2021",
    "Apr-2021",
    "May-2021",
    "Jun-2021",
    "Jul-2021",
    "Aug-2021",
    "Sep-2021",
    "Oct-2021",
    "Nov-2021",
    "Dec-2021",
  ],
  datasets: [
    {
      label: "Businesses Open",
      borderColor: "blue",
      data: [
        3000, 2980, 2930, 2830, 2680, 2580, 2480, 2380, 2280, 2180, 2080, 2030,
        1980, 1930, 1880, 1830, 1780, 1730, 1680, 1630, 1580, 1530, 1480, 1430,
      ],
      fill: true,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    animation: {
      duration: 3000,
      easing: "linear",
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: false, // This is the change to make the line start at the top.
      },
    },
  },
};

const ctx = document.getElementById("progressiveLineChart").getContext("2d");
const chart = new Chart(ctx, config);
