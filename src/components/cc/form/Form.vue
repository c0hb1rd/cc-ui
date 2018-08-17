<template>
  <el-form class="cc-form" ref="form" :model="params" :rules="rules" :label-width="labelWidth">
    <template v-for="item in itemList">
      <el-form-item :label="item.label" :prop="item.model">
        <div class="">
          <el-input v-if="item.kind === 'input'"
                    :type="item.type"
                    size="mini"
                    :style="'width:' + item.inputWidth"
                    v-model.trim="params[item.model]"
                    :width="item.inputWidth"
                    @keyup.native.enter="submit"
                    :disabled="item.disabled"
                    :placeholder="item.placeholder || '请输入'">
          </el-input>
          <el-input v-else-if="item.kind === 'textarea'"
                    type="textarea"
                    :autosize="item.autosize || true"
                    size="mini"
                    :style="'width:' + item.textWidth"
                    v-model.trim="params[item.model]"
                    :width="item.textWidth"
                    :disabled="item.disabled"
                    @keyup.native.enter="submit"
                    :placeholder="item.placeholder || '请输入'">
          </el-input>
          <el-button v-if="item.button" :size="item.button.size" :type="item.button.type"
                     :disabled="item.button.disabled"
                     @click="item.button.click">{{ item.button.label }}
          </el-button>
          <el-radio-group v-else-if="item.kind === 'radio'" v-model="params[item.model]"
                          :disabled="item.disabled">
            <el-radio :key="index" :label="item.value" v-for="item, index in item.options">{{ item.label
              }}
            </el-radio>
          </el-radio-group>
          <el-cascader
            v-else-if="item.kind === 'cascader'"
            :options="((typeof(item.options) ===  'function') ? item.options() : item.options) || []"
            :show-all-levels="false"
            size="mini"
            :label="item.label"
            :change-on-select="true"
            :placeholder="item.placeholder || '请选择'"
            v-model.trim="params[item.model]"
            :props="item.props"
          ></el-cascader>
          <el-select v-else-if="item.kind === 'select'"
                     :disabled="item.disabled"
                     :placeholder="item.placeholder || '请选择'"
                     size="mini"
                     :style="'width:' + item.selectWidth"
                     v-model="params[item.model]">
            <template
              v-for="option, index in (typeof(item.options) ===  'function') ? item.options() : item.options">
              <el-option :key="index" :label="option.label || option.name"
                         :value="option.value || option.id"></el-option>
            </template>
          </el-select>
        </div>
      </el-form-item>
    </template>
    <slot></slot>
  </el-form>
</template>
<script>
  export default {
    props: {
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
      // 表单项
      itemList: {
        type: Array,
        require: true,
        "default": [],
      },
      // 提交回调
      submit: {
        type: Function,
        require: true,
      }
    },
    methods: {
      getForm() {
        return this.$refs.form;
      }
    }
  }
</script>
