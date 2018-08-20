<template>
  <ul class="cc-menu-item flex-column">
    <li class="cc-menu-item__contain" v-for="i, index in menus" :key="index">
      <div class="cc-menu-item__content font-14 flex-row cc-menu-item__node"
           v-if="!i.children" @click="i.click">
        <span class="cc-menu-item__icon flex-center"><i class="fa-lg" v-if="i.icon || i.children"
                                                        :class="i.icon"></i></span>
        <span class="cc-menu-item__label flex-grow">{{ i.label }}</span>
      </div>

      <div class="cc-menu-item__content font-14 flex-row" :data-height="i.children.length"
           :class="isChildren ? '' : 'cc-menu-item__title'"
           v-if="i.children">
        <span class="cc-menu-item__icon flex-center"><i class="fa-lg" :class="i.icon"></i></span>
        <span class="cc-menu-item__label flex-grow">{{ i.label }}</span>
        <span class="cc-menu-item__toggle"><i class="fa fa-caret-right"></i></span>
      </div>

      <div class="cc-menu-item__children" :class="`${'cc-menu-item__children_' + i.children.length}`" v-if="i.children">
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
      menus: {require: true}
    },
    watch: {},
    methods: {},
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
