<template>
    <div ref="chart"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
    props: ['xData', 'data'],
    watch: {
        xData() {
            this.refresh()
        },
        data() {
            this.refresh()
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        refresh() {
            let chart = echarts.init(this.$refs.chart)
            chart.clear()
            chart.setOption({
                xAxis: {
                    data: this.xData
                },
                yAxis: {
                    type: "value"
                },
                series: {
                    name: this.name,
                    type: 'line',
                    data: this.data
                }
            })
        }
    }
}
</script>

<style></style>