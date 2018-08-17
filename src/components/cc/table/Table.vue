<template v-bind="$props">
  <div class="flex-grow rel-area">
    <div class="abs-area abs-max-width flex-column" style="top: 0; bottom: 50px;">
      <slot></slot>
      <slot name="header"></slot>
      <div v-loading="loading" class="flex-column common-table flex-grow rel-area" style="overflow: auto">
        <div class="content-bar flex-column" :class="contentClassList">
          <el-table ref="table"
                    :height="height"
                    class="common-table-area flex-grow"
                    @selection-change="selsChange"
                    :highlight-current="true"
                    :highlight-current-row="true"
                    :data="data">
            <el-table-column v-if="expandColumn" type="expand">
              <template slot-scope="scope">
                <expandCell :row="scope.row" :node="expandColumn"></expandCell>
              </template>
            </el-table-column>
            <el-table-column v-if="showSels" type="selection" width="45"
                             :selectable="selectable"></el-table-column>
            <el-table-column v-if="showIndex" type="index" width="60"></el-table-column>
            <el-table-column v-for="item in columns"
                             v-if="item.show ? item.show() : true"
                             :key="item.label"
                             :label="item.label"
                             :fixed="item.fixed"
                             :width="item.width"
                             :align="item.align || 'left'"
                             :min-width="item.minWidth"
                             :sort-method="item.sortMethod"
                             :sortable="item.sortable">
              <template slot-scope="scope">
                <el-tooltip :open-delay="800"
                            placement="top-start"
                            :content="(item.formatter ? item.formatter(scope.row[item.prop], scope.row) : scope.row[item.prop]) + '' || '无'">
                  <data-cell :item="item" :row="scope.row"></data-cell>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="table-footer-bar abs-area abs-max-width" style="bottom: 0" v-if="showFooter">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :disabled="loading"
        :total="total"
        @current-change="currentChange"
        @size-change="sizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        style="float:right;">
      </el-pagination>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: 'CcTable',
    componentName: 'CcTable',
    components: {
      expandCell: {
        props: {
          node: {require: true},
          row: {require: true}
        },
        render(createElement) {
          const node = this.node;
          const row = this.row;

          return createElement(node.component, {
            props: {
              node: node.node,
              row: row,
            },
            on: node.on
          })
        }
      },
      dataCell: {
        props: {
          item: {
            type: Object,
            require: true
          },
          row: {
            type: Object,
            require: true
          }
        },
        render(createElement) {
          const node = this.item;
          const row = this.row;

          let data = row[node.prop];
          let className = '';

          if (node.formatter)
            data = node.formatter(data, row);

          if (node.classList)
            className = node.classList.join(" ");

          if (node.component)
            return createElement(node.component, {
              props: {
                node: node,
                row: row,
              },
              on: node.on
            });

          return createElement('div', {
            attrs: {
              class: className,
              style: "text-overflow: ellipsis; white-space: nowrap; overflow: hidden"
            }
          }, data + '' || '无');
        }
      }
    },
    props: {
      expandColumn: {
        type: Object,
        default: null
      },
      height: {
        require: true,
        type: String,
        default: null
      },
      data: {
        require: true,
        type: Array,
      },
      selsChange: {
        type: Function,
        default: (val) => {
        }
      },
      showSels: {
        require: true,
        type: '',
        "default": false,
      },
      showIndex: {
        require: true,
        type: Boolean,
        "default": false
      },
      columns: {
        require: true,
        type: Array,
      },
      loading: {
        require: true,
        type: Boolean,
        "default": false,
      },
      currentPage: {
        type: Number
      },
      pageSize: {
        type: Number
      },
      pageSizes: {
        type: Array
      },
      currentChange: {
        type: Function
      },
      sizeChange: {
        type: Function
      },
      total: {
        type: Number
      },
      showFooter: {
        type: Boolean,
        require: true
      },
      contentClassList: {
        type: Array
      },
      selectable: {
        type: Function,
        default: (val) => {
          return true;
        }
      }
    },
    mounted() {
      if (this.height)
        this.$(".common-table .el-table__body-wrapper").mCustomScrollbar({
          theme: 'inset',
          axis: 'y'
        });
      else
        this.$(".common-table .common-table-area").mCustomScrollbar({
          theme: 'inset',
          axis: 'y'
        });
    },
  }
</script>