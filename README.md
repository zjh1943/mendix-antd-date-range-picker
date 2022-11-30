## AntdDateRangePicker

一个用来选择日期（或时间）范围的 Mendix Widget，实现了 Ant Design(antd) 中的 [`DateRangePicker`](https://ant.design/components/date-picker-cn#rangepicker) 的绝大部分接口。

## Features
1. 支持多种时间单位的选择，包括：`date`, `week`, `month`, `quarter`, `year`.
2. 支持自定义日期显示格式，比如：`yyyy-DD-mm`, `dddd-DD-mm hh:MM:ss`.
2. 支持添加常用快捷按钮，一键选择时间段。
3. 支持精确到时分秒的时间段选择。
4. 支持自定义不可选择的日期。
5. 支持定义多国语言。

## Usage

### Installation

1. Add this pluggable widget into your Mendix Project.
    1. Download the latest mpk file from [here](https://github.com/zjh1943/mendix-html-viewer/releases).
    3. Copy the mpk file to `{YourMendixProjectFolder}/widgets/`.
    4. Open your mendix project with the Mendix Studio Pro, click `Menu > App > Synchronize App Directory`.
2. Add `Html Viewer` widget into the page.

### Configuration


## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
