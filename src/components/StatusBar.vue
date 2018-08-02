<template>
    <div class="status-bar">
        <div class="status-bar-item" :key="key" v-for="value, key in statusMap">
            <div>
                <div class="status-icon" :class="value.className"></div>
                <span class="font-14 status-label">{{ key }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                statusMap: {
                    '普通': {className: 'level-0-background', icon: 'fa-circle'},
                    '重要': {className: 'level-1-background', icon: 'fa-info-circle'},
                    '违规': {className: 'level-2-background', icon: 'fa-minus-circle'},
                    '高危': {className: 'level-3-background', icon: 'fa-exclamation-circle'},
                }
            }

        }
    }
</script>
