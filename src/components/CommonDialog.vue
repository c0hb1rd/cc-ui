<template v-bind="$props">
    <el-dialog @close="hidden"
               @open="open"
               :visible.emit="isVisible"
               :width="size"
               append-to-body
               :close-on-click-modal="false"
               :before-close="hidden"
               :title="title">
        <common-form ref="form" :submit="submit" :itemList="itemList" :params="params" :rules="rules"
                     :labelWidth="labelWidth"></common-form>
        <div slot="footer">
            <el-button size="mini" type="info" @click.native.prevent="hidden">取消</el-button>
            <el-button size="mini" :loading="loading" type="primary" @click.native.prevent="submit">提交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import CommonForm from './CommonForm'

    export default {
        components: {CommonForm},
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
            isVisible: {
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

        },
        methods: {
            getForm() {
                return this.$refs.form.getForm();
            }
        }

    }
</script>
