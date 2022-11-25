import { Component, ReactNode, createElement } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import { AntdDateRangePickerContainerProps } from "../typings/AntdDateRangePickerProps";

const { RangePicker } = DatePicker;

import "./ui/AntdDateRangePicker.css";
import { RangePickerProps } from "antd/es/date-picker";

type RangeValue = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
export class AntdDateRangePicker extends Component<AntdDateRangePickerContainerProps> {
    render(): ReactNode {
        const props = this.props;
        const pickerProps: RangePickerProps & {
            showTime?: boolean;
        } = {
            picker: props.picker,
            format: props.format,
            placeholder: [props.placeholderStart, props.placeholderEnd]
        };

        if (props.defaultValueStart !== undefined || props.defaultValueEnd !== undefined) {
            const defaultValue: RangeValue = [null, null];
            if (props.defaultValueStart?.status === "available") {
                defaultValue[0] = dayjs(props.defaultValueStart?.value);
            }
            if (props.defaultValueEnd?.status === "available") {
                defaultValue[1] = dayjs(props.defaultValueEnd?.value);
            }
            console.log(`default value: [ ${defaultValue[0]?.toString()}, ${defaultValue[1]?.toString()}]`);

            if (defaultValue[0] !== null || defaultValue[1] != null) {
                console.log(`default value: has set`);
                pickerProps.defaultValue = defaultValue;
            }
        }

        if (props.valueStart !== undefined || props.valueEnd !== undefined) {
            const value: RangeValue = [null, null];
            if (props.valueStart?.status === "available") {
                value[0] = dayjs(props.valueStart?.value);
            }
            if (props.valueEnd?.status === "available") {
                value[1] = dayjs(props.valueEnd?.value);
            }
            console.log(`value: [ ${value[0]?.toString()}, ${value[1]?.toString()}]`);
            pickerProps.value = value;
        }

        pickerProps.onChange = dates => {
            console.log(`onChange: dates = [ ${dates![0]?.toDate()}, ${dates![1]?.toDate()}]`);
            props.valueStart?.setValue(dates![0]?.toDate());
            props.valueEnd?.setValue(dates![1]?.toDate());
            if (props.onChange?.canExecute) {
                props.onChange?.execute();
            }
        };

        if (props.open?.status === "available") {
            console.log(`open: ${props.open?.value}`);
            pickerProps.open = props.open?.value;
        }

        pickerProps.onOpenChange = (open: boolean) => {
            console.log(`onOpenChange: open = ${open}`);
            props.open?.setValue(open);
            if (props.onOpenChange?.canExecute) {
                props.onOpenChange?.execute();
            }
        };

        pickerProps.showTime = props.showTime;
        pickerProps.placement = props.placement;

        return <RangePicker {...pickerProps} />;
    }
}
