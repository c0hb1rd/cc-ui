<template>
    <div class="flex-grow flex-column">
        <div ref="chart" class="flex-grow"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            option: {
                require: true,
                type: Object,
                default: {}
            }
        },
        watch: {
            option(val) {
                this.loadData(val);
            }
        },
        data() {
            return {
                chart: null,
            }
        },
        methods: {
            loadData(option) {
                if (!option)
                    return;

                this.$emit('input', true);

                if (!this.chart) {
                    this.chart = echarts.init(this.$refs.chart, null);
                    this.addBodyEvent('onresize', () => {
                        this.$emit('input', true);
                        this.chart.resize();

                        setTimeout(() => {
                            this.$emit('input', false);
                        }, 500)
                    }, true)
                }

                this.chart.setOption(option, null, true);

                setTimeout(() => {
                    this.$emit('input', false);
                    this.chart.resize();
                }, 500);
            }
        },
        mounted() {
        }
    }
</script>
