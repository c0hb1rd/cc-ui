<template>
<svg
    class="cc-chart"
    version="1.1"
    baseProfile="fill"
    :height="height"
    :width="width"
    xmlns="http://www.w3.org/2000/svg">
















































  </svg>
</template>

<script>
export default {
	name: "CcChart",
	componentName: "CcChart",
	components: {},
	props: {
		title: {
			require: false,
			default: () => {
				return {
					value: '',
					style: {}
				}
			}
		},
		type: {
			require: true
		},
		height: {
			require: true,
			default: 400
		},
		width: {
			require: true,
			default: 600
		},
		serial: {
			require: true,
			default: () => {
				return []
			}
		}
	},
	watch: {},
	methods: {},
	data() {
		return {}
	},
	created() {},
	mounted() {
		console.log(this.type);
		console.log(this.serial);
	},
	destroyed() {},
}
</script>
