<template>
    <div class="custom-content" @click.prevent.stop="clickNode">
        {{ node.displayName}}
    </div>
</template>

<script>
    export default {
        name: "",
        componentName: "",
        components: {},
        props: {
            node: {require: true},
        },
        watch: {},
        methods: {
            clickNode() {
                this.$emit("clickNode")
            }
        },
        data() {
            return {}
        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        },
    }
</script>

<style lang="scss">
    .custom-content {
    }
</style>
