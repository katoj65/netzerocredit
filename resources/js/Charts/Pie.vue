<template>
    <Pie :data="data" :options="options" />
  </template>

  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'


  ChartJS.register(ArcElement, Tooltip, Legend)

  export default {
    name: 'App',
    components: {
      Pie
    },
    data() {
      return {

data:{

labels: ['Fosil Fuels', 'Fertilizers', 'Burning crop residues', 'Poor land management'],
datasets: [
{
backgroundColor: ['#41B883', '#6e2c00', '#00D8FF', '#DD1B16'],
data: [10, 20, 10, 60],
borderColor: 'white',

}
]



},

options:{
    responsive: true,
    maintainAspectRatio: false
}




      }
    }
  }
  </script>