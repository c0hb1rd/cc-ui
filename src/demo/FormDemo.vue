<template>
  <div class="form-demo abs-max animated fadeIn">
    <div class="flex-grow flex-row flex-center">
      <div style="margin-right: 100px;">
        <h3 style="color: #565e66">表单</h3>
        <div class="item-area" style="width: 400px">
          <cc-form v-bind="formProps" ref="form">
            <input type="file" style="display: none" ref="file">
          </cc-form>
          <el-button type="info" style="margin-left: 80px" size="mini" @click="formProps.reset">清除</el-button>
          <el-button type="primary" style="" size="mini" @click="formProps.submit">提交</el-button>
        </div>
      </div>


      <div style="width: 442px">
        <h3 style="color: #565e66">结果</h3>
        <div class="item-area result-area" style="height: 531px">
          <p class="result-area-content">
            {{ result }}
          </p>
        </div>
      </div>
    </div>
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
        result: '暂无数据',
        formProps: {
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
                    this.formProps.readFile('key')
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
          reset: () => {
            this.formProps.params = {
              name: '',
              age: '',
              dept: '',
              description: '',
              identify: '',
              key: '',
            };

            this.result = '暂无数据';
          },
          readFile: model => {
            const file = this.$refs.file.files[0];
            const reader = new FileReader();

            reader.onload = e => {
              this.formProps.params[model] = e.target.result;
            };

            reader.readAsText(file);
            this.$refs.file.value = '';
          },
          submit: () => {
            this.$refs.form.getForm().validate(valid => {
              if (!valid)
                return;

              this.result = JSON.stringify(this.formProps.params)
            })
          }
        }
      }
    },
    created() {
    },
    mounted() {
      this.addScrollbar(".form-demo");
    },
    destroyed() {
    },
  }
</script>

<style lang="scss">
  .form-demo {
    margin: 30px;

    .item-area {
      padding: 20px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, .125);
      background-color: white;

      .result-area-content {
        white-space: pre-line;
        font-size: 14px;
        color: #565e66;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>
