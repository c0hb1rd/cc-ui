<template>
  <header class="cc-toolbar common-header-area">
    <div class="bar-item flex-row flex-center rel-area" v-if="searchable || actionable || refreshable">
      <span class="title">{{ title }}</span>
      <el-button-group style="position: absolute; top: 5px; left: 0;">
        <el-tooltip v-if="searchable" :open-delay="800" content="查询" placement="top">
          <el-button icon="el-icon-search" size="mini" @click="searchShow = !searchShow"
                     :type="searchShow ? 'primary' : 'info'"></el-button>
        </el-tooltip>
        <el-tooltip v-if="actionable" :open-delay="800" content="操作" placement="top">
          <el-button icon="el-icon-setting" size="mini" @click="actionShow = !actionShow"
                     :type="actionShow ? 'primary' : 'info'"></el-button>
        </el-tooltip>
        <el-tooltip v-if="refreshable" :open-delay="800" content="刷新" placement="top">
          <el-button :loading="loading" icon="el-icon-refresh" size="mini" @click="refresh"
                     type="primary"></el-button>
        </el-tooltip>
      </el-button-group>
      <slot></slot>
    </div>
    <el-collapse-transition>
      <div v-show="searchShow && searchable" class="bar-item">
        <div>
          <slot name="search-bar"></slot>
        </div>
      </div>
    </el-collapse-transition>

    <el-collapse-transition>
      <div v-show="actionShow && actionable" class="bar-item">
        <div>
          <slot name="action-bar"></slot>
        </div>
      </div>
    </el-collapse-transition>
  </header>
</template>

<script>
  export default {
    name: 'CcToolbar',
    componentName: 'CcToolbar',
    props: {
      searchable: {default: true, type: Boolean},
      actionable: {default: true, type: Boolean},
      refreshable: {default: true, type: Boolean},
      loading: {default: false, type: Boolean},
      title: {default: "", type: String},
      showSearch: {default: false},
      showAction: {default: false},
      refresh: {
        default: () => {

        }, type: Function
      }
    },
    methods: {},
    data() {
      return {
        actionShow: this.showAction,
        searchShow: this.showSearch
      }
    },
    watch: {
      actionShow(val) {
        this.$emit('action', val);
      },
      searchShow(val) {
        this.$emit('search', val);
      }
    }
  }
</script>
