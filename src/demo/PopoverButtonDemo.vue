<template>
  <div class="popover-button-demo abs-max flex-column">
    <cc-toolbar :show-action="true">
      <cc-toolbar-item slot="action-bar">
        <cc-popover-group>
          <cc-popover-button v-model="add.visible" v-bind="add">
            <div class="rel-area flex-column" style="height: 700px">
              <form-demo></form-demo>
            </div>
            <!--<cc-form v-bind="add.form" ref="addForm">-->
            <!--<input type="file" ref="file" style="display: none">-->
            <!--</cc-form>-->
          </cc-popover-button>
          <cc-popover-button v-model="edit.visible" v-bind="edit">
            <div class="rel-area flex-column" style="height: 700px; border-radius: 4px">
              <h3 class="flex-row flex-center">表格浮层</h3>
              <table-demo></table-demo>
              <div class="cc-popover-footer flex-center">
                <el-button size="mini" type="info" @click="edit.visible = false">取消</el-button>
                <el-button size="mini" type="primary" @click="edit.submit">确定</el-button>
              </div>
            </div>
          </cc-popover-button>
          <cc-popover-button v-model="del.visible" v-bind="del">
            <div class="flex-column" style="height: 140px">
              <h3 class="flex-center cc-red-color_default">警告</h3>
              <p class="flex-center">这是一条警告消息</p>
              <div class="cc-popover-footer flex-center">
                <el-button size="mini" type="primary" @click="del.visible = false">取消</el-button>
                <el-button size="mini" type="danger" @click="del.submit">确定</el-button>
              </div>
            </div>
          </cc-popover-button>
        </cc-popover-group>
      </cc-toolbar-item>
    </cc-toolbar>
  </div>
</template>

<script>
  import TableDemo from './TableDemo'
  import FormDemo from './FormDemo'

  export default {
    components: {TableDemo, FormDemo},
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        add: {
          icon: 'el-icon-plus',
          visible: false,
          width: 1200,
          label: '添加',
          type: 'primary',
          placement: 'bottom-start',
          click: () => {
            this.add.visible = true;
          },
          submit: () => {
            this.add.visible = false;
          },
        },
        edit: {
          icon: 'el-icon-edit',
          visible: false,
          width: 750,
          label: '修改',
          type: 'primary',
          placement: 'bottom-start',
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
          width: 250,
          label: '删除',
          type: 'danger',
          placement: 'bottom-start',
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
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .popover-button-demo {
    margin: 30px;
  }
</style>
