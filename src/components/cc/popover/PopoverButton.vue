<template>
    <el-popover
            class="popover-btn"
            :placement="placement"
            :width="width"
            v-model="model">
        <slot>

        </slot>
        <el-tooltip v-if="title && !stop" slot="reference" :open-delay="800" effect="dark" :content="title">
            <el-button
                    :disabled="disabled"
                    :icon="icon"
                    :type="type"
                    :loading="loading"
                    @click="btnClick"
                    :size="size"> {{ label }}
            </el-button>
        </el-tooltip>
        <el-button v-if="!title && !stop"
                   slot="reference"
                   :disabled="disabled"
                   :loading="loading"
                   :icon="icon"
                   :type="type"
                   @click="btnClick"
                   :size="size"> {{ label }}
        </el-button>
        <el-tooltip v-if="title && stop" slot="reference" :open-delay="800" effect="dark" :content="title">
            <el-button
                    :disabled="disabled"
                    :icon="icon"
                    :type="type"
                    :loading="loading"
                    @click.stop="btnClick"
                    :size="size"> {{ label }}
            </el-button>
        </el-tooltip>
        <el-button v-if="!title && stop"
                   slot="reference"
                   :disabled="disabled"
                   :icon="icon"
                   :type="type"
                   :loading="loading"
                   @click.stop="btnClick"
                   :size="size"> {{ label }}
        </el-button>
    </el-popover>
</template>

<script>
    export default {
        name: 'CcPopoverButton',
        componentName: 'CcPopoverButton',
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            },
            width: {
                type: Number,
                default: 300
            },
            visible: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: "primary"
            },
            click: {
                type: Function,
            },
            size: {
                type: String,
                default: "mini"
            },
            label: {
                type: String,
            },
            title: {
                type: String,
            },
            stop: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                model: this.visible,
            }
        },
        methods: {
            btnClick() {
                this.model = true;
            }
        },
        watch: {
            visible(val) {
                this.model = val;
            },
            model(val) {
                this.$emit('input', val);
            }
        },
        created() {
            if (this.click) {
                this.btnClick = this.click;
            }
        }
    }
</script>
