import { Component, ReactNode, createElement } from "react";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { AntdDateRangePickerPreviewProps } from "../typings/AntdDateRangePickerProps";
import "./ui/AntdDateRangePicker.scss";

const { RangePicker } = DatePicker;
export class preview extends Component<AntdDateRangePickerPreviewProps> {
    render(): ReactNode {
        const props = this.props;
        const pickerProps: RangePickerProps = {
            picker: props.picker,
            format: props.format,
            size: props.size,
            bordered: props.bordered,
            className: props.class
        };

        return <RangePicker {...pickerProps} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdDateRangePicker.scss");
}
