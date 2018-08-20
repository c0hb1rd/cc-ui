<template>
  <div class="component-demo abs-max animated fadeIn">
    <div class="demo-item flex-column">
      <div class="demo-item-title flex-row flex-y-center">
        <h2>操作栏 CommonHeader</h2>
      </div>
      <div class="demo-item-bar flex-grow flex-column flex-x-center">
        <cc-toolbar title="这是标题">
          <div class="search-bar flex-center bg-color-yellow" slot="search-bar">搜索区域</div>
          <div class="search-bar flex-center bg-color-blue" slot="search-bar">搜索区域</div>
          <div class="action-bar flex-center bg-color-green" slot="action-bar">配置区域</div>
          <div class="action-bar flex-center bg-color-pink" slot="action-bar">配置区域</div>
        </cc-toolbar>
      </div>
    </div>

    <div class="demo-item flex-column">
      <div class="demo-item-title flex-row flex-y-center">
        <h2>按钮悬浮层 PopoverButton</h2>
      </div>
      <div class="demo-item-bar flex-column real-area" style="padding: 10px 15px">
        <popover-group>
          <popover-button v-bind="add" v-model="add.visible">
            <div>
              <h3 class="level-1-color flex-center">添加标题</h3>
              <p class="flex-center">添加消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="info" @click="add.visible = false">取消</el-button>
                <el-button size="mini" type="primary" @click="add.submit">确定</el-button>
              </div>
            </div>
          </popover-button>
          <popover-button v-bind="edit" v-model="edit.visible">
            <template>
              <h3 class="level-2-color flex-center">修改标题</h3>
              <p class="flex-center">修改消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="info" @click="edit.visible = false">取消</el-button>
                <el-button size="mini" type="primary" @click="edit.submit">确定</el-button>
              </div>
            </template>
          </popover-button>
          <popover-button v-bind="del" v-model="del.visible">
            <template>
              <h3 class="level-3-color flex-center">告警标题</h3>
              <p class="flex-center">删除消息</p>
              <div class="footer-bar flex-center">
                <el-button size="mini" type="primary" @click="del.visible = false">取消</el-button>
                <el-button size="mini" type="danger" @click="del.submit">确定</el-button>
              </div>
            </template>
          </popover-button>
        </popover-group>
      </div>
    </div>

    <div class="demo-item flex-column">
      <div class="demo-item-title flex-row flex-y-center">
        <h2>表格 CommonTable</h2>
      </div>
      <div class="demo-item-bar flex-column real-area" style="height: 290px">
        <cc-table class="flex-grow real-area" v-bind="tableProps">
          <div class="search-bar flex-center bg-color-blue" slot="header">表格头部</div>
          <div class="search-bar flex-center bg-color-blue" slot="footer">表格底部</div>
        </cc-table>
      </div>
    </div>
  </div>
</template>

<script>
  import PopoverGroup from '../components/PopoverButtonGroup'
  import PopoverButton from '../components/PopoverButton'

  export default {
    components: {PopoverButton, PopoverGroup},
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
    background-color: #3D4F63;
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
          background-color: #2A3844;
        }
      }

      .demo-item-bar {
        /*margin: 10px;*/
        padding: 5px 10px;
        background-color: #2A3844;
        border-radius: 0 5px 5px 5px;
        overflow: hidden;
        box-shadow: 5px 5px 3px rgba(0, 0, 0, .5);

        .header-bar {
          margin-bottom: 0;
        }

        .el-button-group {
          left: 5px !important;
        }

        .search-bar, .action-bar {
          margin: 5px 0;
          height: 30px;
          padding: 5px;
        }
      }
    }
  }
</style>
