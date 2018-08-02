<template v-bind="$props">
    <el-dialog @close="hidden"
               @open="open"
               :visible.emit="isVisible"
               :width="size"
               append-to-body
               :close-on-click-modal="false"
               :before-close="hidden"
               :title="title">
        <el-form ref="form" :model="params" :rules="rules" :label-width="labelWidth">
            <template v-for="item in itemList">
                <el-form-item :label="item.label" :prop="item.model">
                    <el-input v-if="item.kind === 'input'"
                              :type="item.type"
                              size="small"
                              :style="'width:' + item.inputWidth"
                              v-model.trim="params[item.model]"
                              :width="item.inputWidth"
                              :disabled="item.disabled"
                              :placeholder="item.placeholder || '请输入'">
                    </el-input>
                    <el-input v-if="item.kind === 'textarea'"
                              type="textarea"
                              :autosize="item.autosize || true"
                              size="small"
                              :style="'width:' + item.inputWidth"
                              v-model.trim="params[item.model]"
                              :width="item.inputWidth"
                              :disabled="item.disabled"
                              :placeholder="item.placeholder || '请输入'">
                    </el-input>
                    <el-button v-if="item.button" :size="item.button.size" :type="item.button.type"
                               @click="item.button.click">{{ item.button.label }}
                    </el-button>
                    <el-radio-group v-if="item.kind === 'radio'" v-model="params[item.model]">
                        <el-radio :key="index" :label="item.value" v-for="item, index in item.options">{{ item.label
                            }}
                        </el-radio>
                    </el-radio-group>
                    <el-select v-if="item.kind === 'select'"
                               :placeholder="item.placeholder || '请选择'"
                               size="small"
                               :style="'width:' + item.selectWidth"
                               v-model="params[item.model]">
                        <template v-for="option, index in item.options">
                            <el-option :key="index" :label="option.label || option.name"
                                       :value="option.value || option.id"></el-option>
                        </template>
                    </el-select>

                </el-form-item>
            </template>
        </el-form>

        <div slot="footer">
            <el-button size="small" type="info" @click.native.prevent="hidden">取消</el-button>
            <el-button size="small" :loading="loading" type="primary" @click.native.prevent="submit">提交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
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
        }
    }
</script>
