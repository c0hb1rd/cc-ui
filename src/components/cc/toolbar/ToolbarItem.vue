<template>
    <div class="cc-toolbar-item flex-row flex-a-center" style="white-space: nowrap;">
        <div class="cc-toolbar-item__contain flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CcToolbarItem",
        componentName: "CcToolbarItem",
        data() {
            return {}
        },
        mounted() {
            // this.addScrollbar(".cc-toolbar-item__contain", {axis: 'x'})
        }
    }
</script>
