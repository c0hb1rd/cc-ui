# 组件
+ [CommonDialog 弹框](#commondialog-弹框)
  + [属性](#弹框属性)
  + [方法](#弹框方法)
  + [例子](#弹框例子)
+ [CommonTable 表格](#commontable-表格)
  + [属性](#表格属性)
  + [方法](#表格方法)
  + [例子](#表格例子)

## CommonDialog 弹框

### 弹框属性
|参数|类型|说明|可选值|默认值|
|-|-|-|:-:|:-:|
|title|`String`|标题| -- |空| 
|size |`String`|尺寸| -- |30%|
|rules|`Object`|表单规则|```{ "对应 Params 属性成员": [{require: false, message: "消息", trigger: "blur"}]}```|{ }|
|params|`Object`|Model 对象| -- | { } |
|labelWidth|`String`|表单文本长度| -- | 80px |
|isVisible|`Boolean`|显示状态|`true` / `false`| `false` |
|itemList|`Array`|表单项，按数组顺序排列| ```[{ label: "文本", kind: " input / select / radio", model: "对应 Params 属性成员"}]```| [  ] |
|laoding|`Boolean`|加载状态| `true` / `false` | `false` |

### 弹框方法
|方法名|参数|说明|
|-|-|-|
|hidden| -- |隐藏回调|
|open| -- |显示回调|
|submit| -- |提交按钮回调|


### 弹框例子
```html
<template>
  <common-dialog v-bind="dialogProps"></common-dialog>
</template>
<script>
    import CommonDialog from '@com/CommonDialog'
    
    export default {
      components: {CommonDialog, Tree},
      data() {
        dialogProps: {
          isVisible: false,
          params: {},
          itemList: [
            {
              label: '名称',
              kind: 'input',
              model: 'name'
            }
          ],
          labelWidth: "80px",
          rules: {},
          title: '这是标题',
          size: '30%',
          open: () => {

          },
          submit: () => {
            
          },
          hidden: () => {
            this.dialogProps.isVisible = false;
          }
        }
      }
    }
</script>
```

## CommonTable 表格
### 表格属性
|参数|类型|说明|可选值|默认值|
|-|-|-|:-:|:-:|
|data|`Array`|表格数据| -- | [ ] |
|columns|`Array`|表格列|`[{label: '列标头', prop: '映射到对象的哪个字段作为值', formatter: (val) => { return '格式化函数' }, width: '列宽度', sortable: '是否可排序'}]`| [ ] |
|showIndex|`Boolean`|是否显示序号列| `true` / `false` | `false`|
|showSels|`Boolean` | 是否显示勾选列 | `true` / `false` | `false`|
|loading|`Boolean`|加载状态| `true` / `false` | `false` |

### 表格方法
|方法名|参数|说明|
|-|-|-|
|selsChange|`Array`|勾选值变更时的回调，参数为所勾选的列表行对应对象组成的数组|

### 表格例子
```html
<template>
  <common-table v-bind="tableProps"></common-table>
</template>
<script>
    import CommonTable from '@com/CommonTable'
    
    export default {
      components: {CommonDialog},
      data() {
        tableProps: {
          columns: [
            {label: '用户名', prop: 'name', width: '100px', fixed: 'left'},
            {label: '登录名', prop: 'uid', width: '100px'},
            {label: '口令用户名', prop: 'pwduser', width: '150px'},
            {label: '智能卡用户名', prop: 'keyuser', width: '150px'},
            {label: '身份证号', prop: 'social_id', width: '300px'},
            {label: '军官证号', prop: 'military_id', width: '300px'},
            {
                label: '所在部门', prop: 'sysOrg', width: '150px',
                formatter: (val) => {
                    return this.orgProps.currentNode.name
                },
            },
            {
                label: '密级', prop: 'mlevel', width: '100px', sortable: true,
                formatter: (val) => {
                    return this.levelMap[val]
                },
                sortMethod: (a, b) => {
                    if (a.mlevel > b.mlevel)
                        return 1;
                    else if (a.mlevel < b.mlevel)
                        return 0;
                    else
                        return -1;
                }
            },
            {label: '描述信息', prop: 'description'},
            {
                label: '状态', prop: 'status', width: '100px', fixed: 'right',
                formatter: (val) => {
                    return val === 1 ? '启用' : '禁用'
                }
            },
          ],
          showIndex: true,
          showSels: true,
          sels: [],
          loading: false,
          selsChange: (val) => {
              this.userProps.sels = val;
          }
        }
      }
    }
</script>
```

