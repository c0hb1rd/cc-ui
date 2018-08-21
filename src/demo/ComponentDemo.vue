<template>
  <div class="component-demo abs-max animated fadeIn">
    <div class="demo-item flex-column">
      <div class="demo-item-title  flex-row flex-y-center">
        <h3 class="cc-gray-color_dark cc-white-bg_default">操作栏 CommonHeader</h3>
      </div>
      <div class="demo-item-bar cc-white-bg_default flex-grow flex-column flex-x-center">
        <cc-toolbar title="这是标题">
          <div class="search-bar flex-center cc-blue-bg_default" slot="search-bar">搜索区域</div>
          <div class="search-bar flex-center cc-green-bg_default" slot="search-bar">搜索区域</div>
          <div class="action-bar flex-center cc-pink-bg_default" slot="action-bar">配置区域</div>
          <div class="action-bar flex-center cc-purple-bg_default" slot="action-bar">配置区域</div>
        </cc-toolbar>
      </div>
    </div>

    <div class="demo-item flex-column">
      <div class="demo-item-title  flex-row flex-y-center">
        <h3 class="cc-gray-color_dark cc-white-bg_default">按钮悬浮层 PopoverButton</h3>
      </div>
      <div class="demo-item-bar cc-white-bg_default flex-column real-area" style="padding: 10px 15px">
        <cc-popover-group>
          <cc-popover-button v-bind="add" v-model="add.visible">
            <div>
              <h3 class="level-1-color flex-center">添加标题</h3>
              <p class="flex-center">添加消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="info" @click="add.visible = false">取消</el-button>
                <el-button size="mini" type="primary" @click="add.submit">确定</el-button>
              </div>
            </div>
          </cc-popover-button>
          <cc-popover-button v-bind="edit" v-model="edit.visible">
            <template>
              <h3 class="level-2-color flex-center">修改标题</h3>
              <p class="flex-center">修改消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="info" @click="edit.visible = false">取消</el-button>
                <el-button size="mini" type="primary" @click="edit.submit">确定</el-button>
              </div>
            </template>
          </cc-popover-button>
          <cc-popover-button v-bind="del" v-model="del.visible">
            <template>
              <h3 class="level-3-color flex-center">告警标题</h3>
              <p class="flex-center">删除消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="primary" @click="del.visible = false">取消</el-button>
                <el-button size="mini" type="danger" @click="del.submit">确定</el-button>
              </div>
            </template>
          </cc-popover-button>
        </cc-popover-group>
      </div>
    </div>

    <div class="demo-item flex-column">
      <div class="demo-item-title  flex-row flex-y-center">
        <h2 class="cc-gray-color_dark cc-white-bg_default">表格 CommonTable</h2>
      </div>
      <div class="demo-item-bar cc-white-bg_default flex-column real-area" style="height: 500px">
        <cc-table class="flex-grow real-area" v-bind="tableProps">
          <cc-toolbar :show-search="true">
            <cc-toolbar-item slot="search-bar">
              <el-input size="mini" style="width: 140px" placeholder="请输入"></el-input>
              <el-input size="mini" style="width: 140px" placeholder="请输入"></el-input>
              <el-button size="mini" type="primary">查询</el-button>
            </cc-toolbar-item>
            <cc-toolbar-item slot="action-bar">
              <el-button-group>
                <el-button size="mini" type="primary">添加</el-button>
                <el-button size="mini" type="warning">修改</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </el-button-group>
            </cc-toolbar-item>
          </cc-toolbar>
        </cc-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
          total: 4,
          pageSize: 10,
          pageSizes: [10, 20, 50],
          params: {},
          sels: [],
          data: [1, 2, 3, 4].map(item => ({
            l1: `数据行${item}`,
            l2: `数据行${item}`,
            l3: `数据行${item}`,
            l4: `数据行${item}`,
          })),
          columns: [
            {label: '列1', prop: 'l1', width: 'auto'},
            {label: '列2', prop: 'l2', width: 'auto'},
            {label: '列3', prop: 'l3', width: 'auto'},
            {label: '列4', prop: 'l4', width: 'auto'},
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
          }
        },
        add: {
          icon: 'el-icon-plus',
          visible: false,
          width: 350,
          label: '添加',
          type: 'primary',
          placement: 'top-start',
          click: () => {
            this.add.visible = true;
          },
          submit: () => {
            this.add.visible = false;
          }
        },
        edit: {
          icon: 'el-icon-edit',
          visible: false,
          width: 350,
          label: '修改',
          type: 'primary',
          placement: 'top-start',
          click: () => {
            this.edit.visible = true;
          },
          submit: () => {
            this.edit.visible = false;
          }
        },
        del: {
          icon: 'el-icon-delete',
          visible: false,
          width: 350,
          type: 'danger',
          placement: 'top-start',
          click: () => {
            this.del.visible = true;
          },
          submit: () => {
            this.del.visible = false;
          }
        }
      }
    },
    created() {
    },
    mounted() {
      this.$('.component-demo').mCustomScrollbar({
        theme: 'inset',
        axis: 'y'
      })
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .component-demo {
    margin: 30px 60px;
    overflow: auto;

    .demo-item {
      margin: 40px 40px;
      border-radius: 5px;
      /*overflow: hidden;*/

      .demo-item-title {
        min-height: 50px;
        max-height: 50px;

        h1, h2, h3, h4, h5, h6 {
          padding: 10px 30px;
          margin: 0;
          border-radius: 5px 5px 0 0;
        }
      }

      .demo-item-bar {
        /*margin: 10px;*/
        padding: 5px 10px;
        border-radius: 0 5px 5px 5px;
        overflow: hidden;
        box-shadow: 5px 5px 3px rgba(0, 0, 0, .5);

        .header-bar {
          margin-bottom: 0;
        }

      }
    }
  }
</style>


