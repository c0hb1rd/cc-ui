<template>
  <header class="table-header-bar common-header-area">
    <div class="bar-item flex-row flex-a-center rel-area" v-if="searchable || actionable || refreshable">
      <span>{{ title }}</span>
      <el-button-group>
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
      <div v-show="searchShow" class="bar-item">
        <div>
          <slot name="search-bar"></slot>
        </div>
      </div>
    </el-collapse-transition>

    <el-collapse-transition>
      <div v-show="actionShow" class="bar-item">
        <div>
          <slot name="action-bar"></slot>
        </div>
      </div>
    </el-collapse-transition>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      searchable: {default: true, type: Boolean},
      actionable: {default: true, type: Boolean},
      refreshable: {default: true, type: Boolean},
      loading: {default: false, type: Boolean},
      title: {default: "", type: String},
      refresh: {
        default: () => {

        }, type: Function
      }
    },
    methods: {},
    data() {
      return {
        actionShow: false,
        searchShow: false
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
