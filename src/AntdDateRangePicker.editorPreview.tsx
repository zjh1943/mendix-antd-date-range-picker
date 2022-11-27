import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { AntdDateRangePickerPreviewProps } from "../typings/AntdDateRangePickerProps";

export class preview extends Component<AntdDateRangePickerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={""} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdDateRangePicker.scss");
}
