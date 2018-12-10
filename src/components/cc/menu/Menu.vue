<template>
    <div class="cc-menu flex-column" ref="menu">
        <header class="cc-menu-header rel-area flex-column" style="white-space: nowrap">
            <div style="overflow: hidden" :style="{opacity: isShow? 1 : 0}" class="flex-grow flex-column">
                <slot name="header"></slot>
            </div>
        </header>
        <div :style="{opacity: isShow? 1 : 0}">
            <slot></slot>
        </div>
        <div class="cc-menu-contain flex-grow">
            <cc-menu-item :menus="menus" :currentURL="currentURL"></cc-menu-item>
        </div>

        <slot name="footer"></slot>
    </div>
</template>

<script>
    import CcMenuItem from './MenuItem'

    export default {
        name: 'CcMenu',
        componentName: 'CcMenu',
        components: {CcMenuItem},
        props: {
            menus: {require: true}
        },
        methods: {
            toggle(e) {
                if (this.$refs.menu.className.indexOf("hidden") === -1) {
                    this.$refs.menu.className += " hidden";
                    this.isShow = false;
                } else {
                    this.$refs.menu.className = "cc-menu flex-column";
                    this.isShow = true;
                }
            }
        },
        data() {
            return {
                currentURL: '',
                isShow: true
            }
        },
        created() {
            this.currentURL = this.$route.path;
        },
        mounted() {
            this.addScrollbar(".cc-menu-contain");

            const self = this;
            const itemNode = this.$(".cc-menu-item__node");
            const itemTitle = this.$(".cc-menu-item__title");

            itemNode.on("click", function () {
                itemNode.removeClass("choose-node");
                self.$(this).addClass("choose-node");
            });

            itemTitle.on("click", function () {
                const node = self.$(this)[0].parentNode;
                if (node.className.indexOf("choose-title") !== -1) {
                    self.$(".choose-title").removeClass("choose-title");
                } else {
                    self.$(".choose-title").removeClass("choose-title");
                    node.className += " choose-title";
                }
            })
        },
    }
</script>
