import router from "../../../router";

export default {
    data: () => ({
        debug: {
            info(val) {
                if (typeof (val) !== "string")
                    val = JSON.stringify(val);
                console.log(`[*] ${val}`)
            },
            error(val) {
                if (typeof (val) !== "string")
                    val = JSON.stringify(val);
                console.log(`[!] ${val}`)
            },
            warning(val) {
                if (typeof (val) !== "string")
                    val = JSON.stringify(val);
                console.log(`[-] ${val}`)
            },
            success(val) {
                if (typeof (val) !== "string")
                    val = JSON.stringify(val);
                console.log(`[+] ${val}`)
            }
        }

    }),
    methods: {
        pwdComplexity(value, high) {
            let level = 0;
            high = high || 2;
            length = length || [8, 16];


            const numberRe = new RegExp(/\d+/);
            const stringRe = new RegExp(/[abcdefghijklmnopqrstuvwkyzABCDEFGHIJKLMNOPQRSTUVWKYZ]+/);
            const symbolRe = new RegExp(/[^abcdefghijklmnopqrstuvwkyzABCDEFGHIJKLMNOPQRSTUVWKYZ\d]+/);

            level += numberRe.test(value) ? 1 : 0;
            level += stringRe.test(value) ? 1 : 0;
            level += symbolRe.test(value) ? 1 : 0;

            return level >= high
        },
        addScrollbar(target, obj) {
            obj = obj || Object.create(null);
            this.$(target).mCustomScrollbar({
                theme: obj.theme || 'inset',
                axis: obj.axis || 'y'
            })
        },
        addBodyEvent(event, f, body) {
            let element = body ? document.body : document.getElementById('app');

            element[event] = (e) => {
                element[event] && element[event]();
                f(e);
            }
        },
        alter: params => {
            let body = document.getElementsByTagName('body')[0];

            let alterBox = document.createElement('div');
            let iconSpan = document.createElement('span');
            let messageSpan = document.createElement('span');
            let icon = document.createElement('i');

            iconSpan.className = 'cc-alter-box-icon';
            messageSpan.className = 'cc-alter-box-message';
            alterBox.className = 'cc-alter-box';

            messageSpan.innerHTML = params.message;

            let timeout = 2000;

            switch (params.type) {
                case 'success':
                    icon.className = 'fa fa-check-circle';
                    icon.style.color = 'rgba(91,202,186,0.5)';
                    break;
                case 'info':
                    icon.className = 'fa fa-info-circle';
                    icon.style.color = '#48ace6';
                    timeout = 3000;
                    break;
                case 'warning':
                    icon.className = 'fa fa-exclamation-circle';
                    icon.style.color = '#e69d38';
                    timeout = 5000;
                    break;
                case 'error':
                    icon.className = 'fa fa-warning';
                    icon.style.color = '#e6363f';
                    timeout = 6000;
                    break;
                default:
                    icon.className = 'fa fa-info-circle';
                    icon.style.color = '#48ace6';
                    break;
            }

            iconSpan.appendChild(icon);
            alterBox.appendChild(iconSpan);
            alterBox.appendChild(messageSpan);

            body.appendChild(alterBox);

            setTimeout(() => {
                alterBox.style.top = '50px';
                alterBox.style.opacity = 1;

                setTimeout(() => {
                    alterBox.style.opacity = 0;
                    alterBox.style.top = '0px';

                    setTimeout(() => {
                        body.removeChild(alterBox)
                    }, 400)
                }, params.timeout ? params.timeout : timeout)
            }, 100)
        },
        listSortBy(field) {
            return function (a, b) {
                if (a[field] === b[field] && a.name !== undefined) {
                    if (a.name === b.name) {
                        return a.name.length < b.name.length;
                    }
                    return a.name.length < b.name.length;
                } else {
                    return a[field] > b[field];
                }
            }
        },
        formatStamp(stamp, format) {
            if (!stamp)
                return '无';

            stamp = new Date(stamp);
            format = format || "YY-MM-DD hh:mm:ss";

            const year = stamp.getFullYear();
            const month = stamp.getMonth() + 1;
            const day = stamp.getDate();
            const hour = stamp.getHours();
            const minutes = stamp.getMinutes();
            const seconds = stamp.getSeconds();

            return format.replace("YY", year)
                .replace("MM", month < 10 ? '0' + month : month)
                .replace("DD", day < 10 ? '0' + day : day)
                .replace("hh", hour < 10 ? '0' + hour : hour)
                .replace("mm", minutes < 10 ? '0' + minutes : minutes)
                .replace("ss", seconds < 10 ? '0' + seconds : seconds)
        },
        // 请求结果处理方法
        process(res, callback) {
            if (res.response)
                res = res.response;

            if (res.data && res.data.result === "permission") {
                return
            }

            if (res.data && res.data.result === "success") {
                (callback && callback.success)
                    ? callback.success()
                    : this.alert({
                        type: 'success',
                        message: '操作成功'
                    })
            } else if (res.data && res.data.result === "timeout") {
                (callback && callback.timeout)
                    ? callback.timeout()
                    : this.alert({
                        type: 'warning',
                        message: '登录超时，请重新认证'
                    });
                sessionStorage.clear();
                router.push({path: '/login'});
            } else if (res.data && res.data.result === "warning") {
                (callback && callback.warning)
                    ? callback.warning()
                    : this.alert({
                        type: 'warning',
                        message: res.data.info
                    })
            } else if (res.data && res.data.result === "error") {
                (callback && callback.error)
                    ? callback.error()
                    : this.alert({
                        type: 'error',
                        message: res.data.info
                    })
            } else {
                (callback && callback.warning)
                    ? callback.warning()
                    : this.alert({
                        type: 'warning',
                        message: res.data.info
                    })
            }
        },
        // 获取树形结构根节点，并返回所有非根节点集合
        initRootNode(obj, data, field, value, sort) {
            let children = [];
            data.forEach(item => {
                if (item[field] === value) {
                    item.indent = 2;
                    obj.push(item)
                } else {
                    children.push(item)
                }
            });
            obj.sort(this.listSortBy(sort));
            return children;
        },
        // 把子节点集合拼接到对应父节点
        initChildNode(parentMenu, childrenMenu, pField, cField, sort) {
            parentMenu.forEach(item => {
                let children = [];
                let unFind = [];
                childrenMenu.forEach(subItem => {
                    if (item[pField] === subItem[cField]) {
                        subItem.indent = item.indent + 1;
                        subItem.parent = item;
                        children.push(subItem);
                    } else {
                        unFind.push(subItem)
                    }
                });

                if (children.length) {
                    item.children = children;
                    item.children.sort(this.listSortBy(sort));
                    this.initChildNode(item.children, unFind, pField, cField, sort)
                }
            })
        },
        alert(obj) {
            obj = obj || {
                type: 'info',
                message: 'Hello， World'
            };

            this.$message({
                type: obj.type,
                message: obj.message
            })
        },
        clipboardCopy(val) {
            let textArea = document.createElement("textarea");
            document.body.appendChild(textArea);
            textArea.textContent = val;
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea)
        },
        parseTree(data, rootField, pField, cField, sort) {
            let ret = [];
            this.initChildNode(ret, this.initRootNode(ret, data, pField, rootField, sort), cField, pField, sort);
            return ret;
        }
    }
}
