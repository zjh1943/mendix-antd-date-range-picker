import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { AntdDateRangePickerContainerProps } from "../typings/AntdDateRangePickerProps";

import "./ui/AntdDateRangePicker.css";

export class AntdDateRangePicker extends Component<AntdDateRangePickerContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
