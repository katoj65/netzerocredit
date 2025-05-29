<template>
    <Bar :data="data" :options="options" />
  </template>

  <script lang="ts">
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  export default {
    name: 'App',
    components: {
      Bar
    },
    data() {
      return {
        data: {
          labels: ['January', 'February', 'March','April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40, 70],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
            }
          ]

        },
        options: {
          responsive: true
        }
      }
    }
  }
  </script>