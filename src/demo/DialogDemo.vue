<template>
  <div class="dialog-demo animated fadeIn">
    <cc-toolbar :searchable="false" :refreshable="false" title="表单">
      <template slot="action-bar">
        <el-button size="mini" type="primary" @click="dialogProps.visible = true">弹出</el-button>
      </template>
    </cc-toolbar>

    <cc-toolbar :searchable="false" :refreshable="false" title="表格">
      <template slot="action-bar">
        <el-button size="mini" type="primary" @click="customProps.visible = true">弹出</el-button>
      </template>
    </cc-toolbar>

    <div class="item-area">
      <el-button-group>
        <el-button size="mini" type="info" @click="dialogProps.visible = true">弹出</el-button>
        <el-button size="mini" type="primary" @click="dialogProps.visible = true">弹出</el-button>
        <el-button size="mini" type="warning" @click="dialogProps.visible = true">弹出</el-button>
        <el-button size="mini" type="danger" @click="dialogProps.visible = true">弹出</el-button>
      </el-button-group>
    </div>


    <input type="file" ref="file" style="display: none">

    <cc-dialog ref="dialog" v-bind="dialogProps"></cc-dialog>

    <cc-dialog ref="dialog" v-bind="customProps">
      <div style="height: 500px" class="rel-area flex-column">
        <cc-table v-bind="tableProps">
          <cc-toolbar>
            <template slot="search-bar">
              <el-input clearable :disabled="tableProps.loading" placeholder="输入框1" size="mini"
                        style="width: 120px"></el-input>
              <el-input clearable :disabled="tableProps.loading" placeholder="输入框1" size="mini"
                        style="width: 120px"></el-input>
              <el-select clearable size="mini" value="" v-model="tableProps.params.select">
                <el-option value="1" label="选项1"></el-option>
                <el-option value="2" label="选项2"></el-option>
              </el-select>

              <el-button type="primary" size="mini" :loading="tableProps.loading" @click="tableProps.getData">查询
              </el-button>
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
    </cc-dialog>
  </div>
</template>

<script>
  import CcDialog from 'cc@/dialog/Dialog'
  import CcToolbar from 'cc@/toolbar/Toolbar'
  import CcTable from 'cc@/table/Table'

  export default {
    name: "",
    componentName: "",
    components: {CcDialog, CcToolbar, CcTable},
    props: {},
    watch: {},
    methods: {},
    data() {
      return {
        tableProps: {
          showIndex: true,
          showFooter: true,
          showSels: false,
          loading: false,
          height: 'auto',
          currentPage: 1,
          total: 100,
          pageSize: 10,
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

          }
        },
        dialogProps: {
          visible: false,
          size: '450px',
          title: '表单弹框',
          labelWidth: '80px',
          params: {
            name: '用户名',
            age: '20',
            dept: '机构A',
            description: '从前有座山，山里有座庙，庙里有个小和尚',
            identify: '44050X199909199999',
            key: ''
          },
          itemList: [
            {label: '姓名', kind: 'input', model: 'name', inputWidth: '150px'},
            {label: '年龄', kind: 'input', model: 'age', type: 'number', inputWidth: '100px'},
            {
              label: '部门', kind: 'select', model: 'dept', selectWidth: '200px', options: [
                {label: '机构A', value: '机构A'},
                {label: '机构B', value: '机构B'},
              ]
            },
            {label: '身份证号', kind: 'input', model: 'identify', inputWidth: '180px'},
            {
              label: '描述',
              kind: 'textarea',
              model: 'description',
              autosize: {minRows: 3, maxRows: 3},
              textWidth: '300px',
            },
            {
              label: '证书',
              kind: 'textarea',
              model: 'key',
              disabled: true,
              autosize: {minRows: 5, maxRows: 5},
              textWidth: '300px',
              button: {
                label: '上传',
                type: 'primary',
                size: 'mini',
                click: () => {
                  this.$refs.file.onchange = () => {
                    this.dialogProps.readFile('key')
                  };
                  this.$refs.file.click();
                }
              }
            },
          ],
          rules: {
            name: [
              {required: true, message: '值不能为空', tigger: 'blur'},
            ],
            age: [
              {required: true, message: '值不能为空', tigger: 'blur'},
            ],
            dept: [
              {required: true, message: '值不能为空', tigger: 'blur'},
            ],
            identify: [
              {required: true, message: '值不能为空', tigger: 'blur'},
            ],
          },
          loading: false,
          readFile: model => {
            const file = this.$refs.file.files[0];
            const reader = new FileReader();

            reader.onload = e => {
              this.dialogProps.params[model] = e.target.result;
            };

            reader.readAsText(file);
            this.$refs.file.value = '';
          },
          open: () => {

          },
          hidden: () => {
            this.dialogProps.visible = false;
          },
          submit: () => {
            this.$refs.dialog.getForm().validate(valid => {
              if (!valid)
                return;

              this.dialogProps.hidden();
            })
          }
        },
        customProps: {
          size: "60%",
          visible: false,
          title: '表格弹框',
          rules: {},
          itemList: [],
          params: {},
          open: () => {

          },
          hidden: () => {
            this.customProps.visible = false;
          },
          submit: () => {

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
  .dialog-demo {
    margin: 30px;

    .item-area {
      background-color: white;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, .125);
      padding: 10px;
      margin-top: 30px;
    }
  }
</style>
