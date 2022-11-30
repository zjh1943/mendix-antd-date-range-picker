## 介绍

一个用来选择日期（或时间）范围的 Mendix Widget，实现了 Ant Design(antd) 中的 [`RangePicker`](https://ant.design/components/date-picker-cn#rangepicker) 的绝大部分接口。

![antd date range picker](./doc/DateRangePicker.png)

## 功能特性

1. 支持多种时间单位的选择，包括：`date`, `week`, `month`, `quarter`, `year`.
2. 支持自定义日期显示格式，比如：`yyyy-DD-mm`, `dddd-DD-mm hh:MM:ss`.
2. 支持添加常用快捷按钮，一键选择时间段。
3. 支持精确到时分秒的时间段选择。
4. 支持自定义不可选择的日期。
5. 支持定义多国语言。

## 快速安装和使用

1. 将该组件添加到 Mendix Project 中.
    1. 从[这里](https://github.com/zjh1943/mendix-antd-date-range-picker/releases)下载 mpk 文件.
    3. 把 mpk 文件复制到目录 `{YourMendixProjectFolder}/widgets/`.
    4. 用 Mendix Studio Pro 打开你的 Mendix Project，然后点击菜单 `Menu > App > Synchronize App Directory`.
2. 将 `Antd Date Range Picker` 添加组件到页面中。

## 详细配置说明

### General


### Advanced

### Customize View


## Demo 项目

1. 你可以在[这里](todo)访问在线 demo。  
2. 也可以下载 demo project，在自己的 Mendix Studio Pro 上启动运行。具体方法如下：
    1. clone demo project。
    2. 运行。

## 与 `antd` RangePicker 的功能对比

这里列举了 `antd` 中 `RangePicker` 的所有参数，并说明了该组件是否支持该属性，以及不支持的原因。如果想查看`antd`中原属性的含义，请[移步这里](https://ant.design/components/date-picker-cn#rangepicker)。

| antd 组件参数             | 参数说明                                       | 是否支持 | 备注                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| allowEmpty            | 允许起始项部分为空                                  | Y    |                      |
| dateRender            | 自定义日期单元格的内容。info 参数自 4.3.0 添加              | N    | 小概率需求                |
| defaultPickerValue    | 默认面板日期                                     | N    | 在 Mendix 中没有实用价值     |
| defaultValue          | 默认日期                                       | N    | 在 Mendix 中没有实用价值     |
| disabled              | 禁用起始项                                      | Y    |                      |
| disabledTime          | 不可选择的时间                                    | Y    |                      |
| format                | 展示的日期格式                                    | Y    |                      |
| presets               | 预设时间范围快捷选择                                 | Y    |                      |
| renderExtraFooter     | 在面板中添加额外的页脚                                | Y    |                      |
| separator             | 设置分隔符                                      | N    | 小概率需求                |
| showTime              | 增加时间选择功能                                   | Y    |                      |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，例子                         | N    | 在 Mendix 中没有实用价值     |
| value                 | 日期                                         | Y    |                      |
| onCalendarChange      | 待选日期发生变化的回调。info 参数自 4.4.0 添加              | N    | 在 Mendix 中没有实用价值     |
| onChange              | 日期范围发生变化的回调                                | Y    |                      |
| allowClear            | 是否显示清除按钮                                   | Y    |                      |
| autoFocus             | 自动获取焦点                                     | Y    |                      |
| bordered              | 是否有边框                                      | Y    |                      |
| className             | 选择器 className                              | Y    |                      |
| popupClassName        | 额外的弹出日历 className                          | Y    |                      |
| inputReadOnly         | 设置输入框为只读（避免在移动设备上打开虚拟键盘）                   | Y    |                      |
| locale                | 国际化配置                                      | Y    | 目前仅支持 zh\_CN, en\_US |
| open                  | 控制弹层是否展开                                   | Y    |                      |
| picker                | 设置选择器类型                                    | Y    |                      |
| placeholder           | 输入框提示文字                                    | Y    |                      |
| placement             | 选择框弹出的位置                                   | Y    |                      |
| popupStyle            | 额外的弹出日历样式                                  | N    | 小概率需求                |
| size                  | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px | Y    |                      |
| status                | 设置校验状态                                     | Y    |                      |
| style                 | 自定义输入框样式                                   | Y    |                      |
| onOpenChange          | 弹出日历和关闭日历的回调                               | Y    |                      | 
## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
