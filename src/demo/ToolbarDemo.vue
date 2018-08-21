<template>
  <div class="toolbar-demo abs-max animated fadeIn">
    <cc-toolbar v-bind="simple">
      <cc-toolbar-item slot="search-bar">
        <el-input clearable :disabled="simple.loading" size="mini" placeholder="请输入" style="width: 120px"></el-input>
        <el-button size="mini" :loading="simple.loading" @click="simple.refresh" type="primary">提交</el-button>
      </cc-toolbar-item>

      <cc-toolbar-item slot="action-bar">
        <el-button-group>
          <el-button size="mini" :disabled="simple.loading" type="primary">添加</el-button>
          <el-button size="mini" :disabled="simple.loading" type="primary">修改</el-button>
          <el-button size="mini" :disabled="simple.loading" type="danger">删除</el-button>
        </el-button-group>
      </cc-toolbar-item>

    </cc-toolbar>

    <cc-toolbar v-bind="search">
      <cc-toolbar-item slot="search-bar">
        <el-input clearable :disabled="search.loading" size="mini" placeholder="请输入" style="width: 120px"></el-input>
        <el-button size="mini" :loading="search.loading" @click="search.refresh" type="primary">提交</el-button>
      </cc-toolbar-item>
    </cc-toolbar>


    <cc-toolbar v-bind="action">
      <cc-toolbar-item slot="action-bar">
        <el-button-group>
          <el-button size="mini" :disabled="action.loading" type="primary">添加</el-button>
          <el-button size="mini" :disabled="action.loading" type="primary">修改</el-button>
          <el-button size="mini" :disabled="action.loading" type="danger">删除</el-button>
        </el-button-group>
      </cc-toolbar-item>
    </cc-toolbar>


    <cc-toolbar v-bind="common">
      <cc-toolbar-item slot="search-bar">
        <el-input :disabled="common.loading" clearable size="mini" placeholder="请输入" style="width: 120px"></el-input>
        <el-select :disabled="common.loading" size="mini" clearable value="" v-model="common.select">
          <el-option value="1" label="选项1"></el-option>
          <el-option value="2" label="选项2"></el-option>
        </el-select>
        <el-button size="mini" @click="common.refresh" :loading="common.loading" type="primary">查询</el-button>
      </cc-toolbar-item>
      <cc-toolbar-item slot="action-bar">
        <el-button-group>
          <el-button size="mini" type="info">普通</el-button>
          <el-button size="mini" type="primary">标准</el-button>
          <el-button size="mini" type="warning">重点</el-button>
          <el-button size="mini" type="danger">危险</el-button>
        </el-button-group>
      </cc-toolbar-item>
    </cc-toolbar>


    <cc-toolbar v-bind="refresh"></cc-toolbar>
  </div>
</template>

<script>
  import CcToolbarItem from "../components/cc/toolbar/ToolbarItem";

  export default {
    name: "",
    components: {CcToolbarItem},
    componentName: "",
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        simple: {
          showAction: true,
          showSearch: true,
          loading: false,
          title: '标准操作栏',
          refresh: () => {
            this.simple.loading = true;
            setTimeout(() => {
              this.simple.loading = false
            }, 1000)
          }
        },
        search: {
          showAction: true,
          showSearch: true,
          loading: false,
          title: '搜索栏',
          actionable: false,
          refresh: () => {
            this.search.loading = true;
            setTimeout(() => {
              this.search.loading = false
            }, 1000)
          }
        },
        action: {
          showAction: true,
          showSearch: true,
          loading: false,
          title: '动作栏',
          searchable: false,
          actionShow: false,
          refresh: () => {
            this.action.loading = true;
            setTimeout(() => {
              this.action.loading = false
            }, 1000)
          }
        },
        common: {
          showAction: true,
          showSearch: true,
          loading: false,
          title: '没有刷新按钮',
          refreshable: false,
          refresh: () => {
            this.common.loading = true;
            setTimeout(() => {
              this.common.loading = false
            }, 1000)
          }
        },
        refresh: {
          showAction: true,
          showSearch: true,
          loading: false,
          title: '只有刷新按钮',
          searchable: false,
          actionable: false,
          refresh: () => {
            this.refresh.loading = true;
            setTimeout(() => {
              this.refresh.loading = false
            }, 1000)
          }
        },
      }
    },
    created() {
    },
    mounted() {
      this.addScrollbar(".toolbar-demo");
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .toolbar-demo {
    margin: 30px;

    .cc-toolbar {
      margin-bottom: 40px;
    }
  }
</style>
