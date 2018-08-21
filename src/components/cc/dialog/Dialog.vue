<template v-bind="$props">
  <el-dialog @close="hidden"
             @open="open"
             class="cc-dialog"
             :visible.emit="visible"
             :width="size"
             append-to-body
             :close-on-click-modal="false"
             :before-close="hidden"
             :title="title">
    <div v-if="itemList.length > 0" style="background-color: white; padding: 10px 20px">
      <cc-form ref="form" :submit="submit" :itemList="itemList" :params="params" :rules="rules"
               :labelWidth="labelWidth"></cc-form>
    </div>
    <slot></slot>
    <div slot="footer">
      <el-button size="mini" type="info" @click.native.prevent="hidden">取消</el-button>
      <el-button size="mini" :loading="loading" type="primary" @click.native.prevent="submit">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import CcForm from 'cc@/form/Form'

  export default {
    components: {CcForm},
    props: {
      // 标题
      title: {
        type: String,
        require: true,
        "default": "",
      },
      // 尺寸
      size: {
        type: String,
        require: true,
        "default": "30%",
      },
      // 表单规则
      rules: {
        type: Object,
        require: true,
        "default": {},
      },
      // Model 对象
      params: {
        type: Object,
        require: true,
        "default": {},
      },
      // 表单文本长度
      labelWidth: {
        type: String,
        require: true,
        "default": "80px",
      },
      // 是否显示
      visible: {
        type: Boolean,
        require: true,
        "default": false,
      },
      // 表单项
      itemList: {
        type: Array,
        require: true,
        "default": [],
      },
      // 加载状态
      loading: {
        type: Boolean,
        require: true,
        "default": false,
      },
      // 隐藏回调
      hidden: {
        type: Function,
        require: true,
      },
      // 显示回调
      open: {
        type: Function,
        require: true,
      },
      // 提交回调
      submit: {
        type: Function,
        require: true,
      }
    },
    data: () => ({
      form: null
    }),
    mounted() {
      this.addScrollbar(".cc-dialog")
    },
    methods: {
      getForm() {
        return this.$refs.form.getForm();
      }
    }

  }
</script>
