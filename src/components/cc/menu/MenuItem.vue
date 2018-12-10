<template>
    <ul class="cc-menu-item flex-column">
        <li class="cc-menu-item__contain" v-for="i, index in menus" :key="index">
            <div class="cc-menu-item__content font-14 flex-row cc-menu-item__node"
                 v-if="!i.children && (i.show === undefined || i.show)" @click="i.click">
                <span :style="{marginLeft: isChildren && i.icon ? '60px' : '', minWidth: isChildren && i.icon ? '20px' : ''}"
                      class="cc-menu-item__icon flex-center"><i v-if="i.icon || i.children" :class="i.icon"></i></span>
                <span class="cc-menu-item__label flex-grow">{{ i.label }}</span>
            </div>

            <div class="cc-menu-item__content font-14 flex-row" :data-height="getNodeHeight(i)"
                 :class="isChildren ? '' : 'cc-menu-item__title'"
                 v-if="i.children && (i.show === undefined || i.show)">
                <span class="cc-menu-item__icon flex-center"><i :class="i.icon"></i></span>
                <span class="cc-menu-item__label flex-grow">{{ i.label }}</span>
                <span class="cc-menu-item__toggle"><i class="fa fa-caret-right"></i></span>
            </div>

            <div class="cc-menu-item__children" :class="`${'cc-menu-item__children_' + getNodeHeight(i)}`"
                 v-if="i.children">
                <cc-menu-item :menus="i.children" :isChildren="true"></cc-menu-item>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CcMenuItem",
        componentName: "CcMenuItem",
        components: {},
        props: {
            isChildren: {default: false},
            menus: {require: true},
            currentURL: {require: true}
        },
        watch: {},
        methods: {
            getNodeHeight(node) {
                let nodeHeight = 0;
                for (const item of node.children) {
                    if (item.show === undefined || item.show) {
                        nodeHeight += 1;
                    }
                }

                return nodeHeight
            }
        },
        data() {
            return {
                isChoose: false,
            }
        },
        created() {

        },
        mounted() {

        },
        destroyed() {
        },
    }
</script>
