<template>
  <div class="table-demo flex-column flex-grow rel-area animated fadeIn">
    <cc-table class="" v-bind="tableProps">
      <cc-toolbar :show-action="true" :show-search="true" :refresh="tableProps.getData" :loading="tableProps.loading">
        <template slot="search-bar">
          <el-input clearable :disabled="tableProps.loading" placeholder="输入框1" size="mini"
                    style="width: 120px"></el-input>
          <el-input clearable :disabled="tableProps.loading" placeholder="输入框1" size="mini"
                    style="width: 120px"></el-input>
          <el-select clearable size="mini" value="" v-model="tableProps.params.select">
            <el-option value="1" label="选项1"></el-option>
            <el-option value="2" label="选项2"></el-option>
          </el-select>

          <el-button type="primary" size="mini" :loading="tableProps.loading" @click="tableProps.getData">查询</el-button>
        </template>
        <template slot="action-bar">
          <el-button-group>
            <el-button size="mini" :disabled="tableProps.loading" type="primary">添加</el-button>
            <el-button size="mini" :disabled="tableProps.loading" type="primary">修改</el-button>
            <el-button size="mini" :disabled="tableProps.loading" type="danger">删除</el-button>
          </el-button-group>
        </template>
      </cc-toolbar>
    </cc-table>
  </div>
</template>

<script>
  export default {
    name: "",
    componentName: "",
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        tableProps: {
          showIndex: true,
          showFooter: true,
          showSels: true,
          loading: false,
          height: 'auto',
          currentPage: 1,
          total: 100,
          pageSize: 20,
          pageSizes: [10, 20, 50],
          params: {},
          sels: [],
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => ({
            l1: `数据行${item}`,
            l2: `数据行${item}`,
            l3: `数据行${item}`,
            l4: `数据行${item}`,
            l5: `数据行${item}`,
            l6: `数据行${item}`,
          })),
          columns: [
            {label: '列1', prop: 'l1', width: 'auto'},
            {label: '列2', prop: 'l2', width: 'auto'},
            {label: '列3', prop: 'l3', width: 'auto'},
            {label: '列4', prop: 'l4', width: 'auto'},
            {label: '列5', prop: 'l4', width: 'auto'},
            {label: '列6', prop: 'l4', width: 'auto'},
          ],
          changeCallback: () => {
            this.tableProps.getData();
          },
          sizeChange: val => {
            this.tableProps.pageSize = val;
            this.tableProps.changeCallback();
          },
          currentChange: val => {
            this.tableProps.currentPage = val;
            this.tableProps.changeCallback();
          },
          selsChange: val => {
            this.tableProps.sels = val;
          },
          getData: () => {
            this.tableProps.loading = true;

            const params = {
              size: this.tableProps.pageSize,
              page: this.tableProps.currentPage
            };

            setTimeout(() => {
              this.tableProps.loading = false;
            }, 1000);
          }
        },
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

<style lang="scss">
  .table-demo {
    margin: 30px;
  }
</style>
