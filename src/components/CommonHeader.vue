<template>
    <header class="header-bar common-header-area">
        <div class="bar-item flex-row flex-center" v-if="searchable || actionable || refreshable"
             style="height: 30px; padding: 0">
            <span>{{ title }}</span>
            <el-button-group style="position: absolute; left: 0;">
                <el-tooltip v-if="searchable" :open-delay="800" content="查询" placement="top">
                    <el-button icon="el-icon-search" size="mini" @click="searchShow = !searchShow"
                               :type="searchShow ? 'primary' : 'info'"></el-button>
                </el-tooltip>
                <el-tooltip v-if="actionable" :open-delay="800" content="操作" placement="top">
                    <el-button icon="el-icon-setting" size="mini" @click="actionShow = !actionShow"
                               :type="actionShow ? 'primary' : 'info'"></el-button>
                </el-tooltip>
                <el-tooltip v-if="refreshable" :open-delay="800" content="刷新" placement="top">
                    <el-button :loading="loading" icon="el-icon-refresh" size="mini" @click="refresh"
                               type="primary"></el-button>
                </el-tooltip>
            </el-button-group>
            <slot></slot>
        </div>
        <div v-show="searchShow" class="bar-item">
            <slot name="search-bar"></slot>
        </div>
        <div v-show="actionShow" class="bar-item">
            <slot name="action-bar"></slot>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            searchable: {default: true, type: Boolean},
            actionable: {default: true, type: Boolean},
            refreshable: {default: true, type: Boolean},
            loading: {default: false, type: Boolean},
            title: {default: "", type: String},
            refresh: {
                default: () => {

                }, type: Function
            }
        },
        methods: {},
        data() {
            return {
                actionShow: false,
                searchShow: false
            }
        },
        watch: {
            actionShow(val) {
                this.$emit('action', val);
            },
            searchShow(val) {
                this.$emit('search', val);
            }
        }
    }
</script>

<style lang="scss">
    .common-header-area {
        height: auto;
    }
</style>
