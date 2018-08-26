<template>
  <div class="chart-demo abs-max flex-center cc-white-bg_default">
    <cc-chart class="cc-primary-bg_default" v-bind="lineChart">

    </cc-chart>
  </div>
</template>

<script>
  export default {
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        lineChart: {
          title: {
            value: '标题',
            style: {
              backgroundColor: '',
              color: '',
              fontSize: '',
              fontWeight: ''
            }
          },
          style: {
            backgroundColor: '',
            opacity: 1                                            ,
          },
          type: 'line',
          serial: {
            event: {
              click: node => {
                this.alert(node.label)
              }
            },
            formatter: {
              label: node => {
                return node.label
              },
              hover: node => {
                return node.label
              },
            },
            data: [
              {label: 'A', value: 10},
              {label: 'B', value: 8},
              {label: 'C', value: 14},
              {label: 'D', value: 3},
              {label: 'E', value: 20},
              {label: 'F', value: 31},
            ]
          }
        }
      }
    },
    created() {
    },
    mounted() {
      // this.addScrollbar(".chart-demo")
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .chart-demo {
    margin: 30px 60px;
    border-radius: 4px;
  }
</style>
