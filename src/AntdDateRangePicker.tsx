import { Component, ReactNode, createElement, CSSProperties } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";


import { AntdDateRangePickerContainerProps } from "../typings/AntdDateRangePickerProps";

const { RangePicker } = DatePicker;

import "./ui/AntdDateRangePicker.css";
import { RangePickerProps } from "antd/es/date-picker";
import zh_CN from "antd/es/date-picker/locale/zh_CN";
import en_US from "antd/es/date-picker/locale/en_US";

type RangeValue = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;

export class AntdDateRangePicker extends Component<AntdDateRangePickerContainerProps> {
    render(): ReactNode {
        const props = this.props;

        // ====================================
        // === property group General ===
        // ====================================

        // === sub group Main ===
        const pickerProps: RangePickerProps & {
            showTime?: boolean;
            popupClassName?: string;
            popupStyle?: CSSProperties;
        } = {
            picker: props.picker,
            format: props.format,
            placeholder: [props.placeholderStart, props.placeholderEnd]
        };

        // if (props.defaultValueStart !== undefined || props.defaultValueEnd !== undefined) {
        //     const defaultValue: RangeValue = [null, null];
        //     if (props.defaultValueStart?.status === "available") {
        //         defaultValue[0] = dayjs(props.defaultValueStart?.value);
        //     }
        //     if (props.defaultValueEnd?.status === "available") {
        //         defaultValue[1] = dayjs(props.defaultValueEnd?.value);
        //     }
        //     console.log(`default value: [ ${defaultValue[0]?.toString()}, ${defaultValue[1]?.toString()}]`);

        //     if (defaultValue[0] !== null || defaultValue[1] != null) {
        //         console.log(`default value: has set`);
        //         pickerProps.defaultValue = defaultValue;
        //     }
        // }

        // === sub group Control ===
        if (props.valueStart !== undefined || props.valueEnd !== undefined) {
            console.log(`value from mendix : [ ${props.valueStart?.value}, ${props.valueEnd?.value}]`);
            const value: RangeValue = [null, null];
            if (props.valueStart?.status === "available" && props.valueStart.value) {
                value[0] = dayjs(props.valueStart?.value);
            }
            if (props.valueEnd?.status === "available" && props.valueEnd.value) {
                value[1] = dayjs(props.valueEnd?.value);
            }
            console.log(`value for antd: [ ${value[0]?.toString()}, ${value[1]?.toString()}]`);
            pickerProps.value = value;
        }

        pickerProps.onChange = dates => {
            console.log(`onChange: dates = `, dates);
            if (dates) {
                props.valueStart?.setValue(dates![0]?.toDate());
                props.valueEnd?.setValue(dates![1]?.toDate());
            } else {
                props.valueStart?.setValue(undefined);
                props.valueEnd?.setValue(undefined);
            }
            if (props.onChange?.canExecute) {
                props.onChange?.execute();
            }
        };

        // === sub group Views ===
        pickerProps.showTime = props.showTime;
        pickerProps.placement = props.placement;
        pickerProps.disabled = props.valueStart?.readOnly || props.valueEnd?.readOnly;

        // ====================================
        // === property group Advanced ===
        // ====================================

        // === sub group Main ===
        pickerProps.allowEmpty = [props.allowEmptyStart, props.allowEmptyEnd];
        pickerProps.autoFocus = props.autoFocus;
        pickerProps.inputReadOnly = props.inputReadOnly;

        // === sub group Locale ===
        if (props.locale === "en_US") {
            pickerProps.locale = en_US;
        } else {
            pickerProps.locale = zh_CN;
        }

        // === sub group Picker Open State ===
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

        // === sub group Picker Value ===
        if (props.defaultPickerValueStart !== undefined || props.defaultPickerValueEnd !== undefined) {
            const defaultPickerValue: RangeValue = [null, null];
            if (props.defaultPickerValueStart?.status === "available") {
                defaultPickerValue[0] = dayjs(props.defaultPickerValueStart?.value);
            }
            if (props.defaultPickerValueEnd?.status === "available") {
                defaultPickerValue[1] = dayjs(props.defaultPickerValueEnd?.value);
            }
            console.log(
                `default picker value: [ ${defaultPickerValue[0]?.toString()}, ${defaultPickerValue[1]?.toString()}]`
            );

            if (defaultPickerValue[0] !== null && defaultPickerValue[1] != null) {
                pickerProps.defaultPickerValue = [defaultPickerValue[0]!, defaultPickerValue[1]!];
            }
        }

        // === sub group Disable Date ===
        if (props.disableDateMode !== "off" && props.disableDatesDatasource?.status === "available") {
            pickerProps.disabledDate = date => {
                if (props.disableDateMode === "negative") {
                    props.disableDatesDatasource?.items?.forEach(item => {
                        const newDate = dayjs(props.disableDatesAttribute?.get(item).value);
                        if (date.isSame(newDate, "day")) {
                            return false;
                        }
                    });
                    return true;
                } else {
                    // props.disableDateMode === "positive"
                    props.disableDatesDatasource?.items?.forEach(item => {
                        const newDate = dayjs(props.disableDatesAttribute?.get(item).value);
                        if (date.isSame(newDate, "day")) {
                            return true;
                        }
                    });
                    return false;
                }
            };
        }

        // ====================================
        // === property group Cutomize View ===
        // ====================================

        // === sub group Common ===
        pickerProps.allowClear = props.allowClear;
        pickerProps.bordered = props.bordered;
        pickerProps.popupClassName = props.popupClassName;

        // === property group Shortcuts ===
        // pickerProps.showNow = props.showNow;
        // pickerProps.showToday = props.showToday;

        if (props.shortcutsDatasource?.status === "available") {
            pickerProps.presets = props.shortcutsDatasource.items!.map(item => {
                const label = props.shortcutsLabelAttribute?.get(item).value;
                const startValue = props.shortcutsValueStartAttribute?.get(item).value;
                const endValue = props.shortcutsValueEndAttribute?.get(item).value;
                const value: Exclude<RangeValue, null> = [dayjs(startValue), dayjs(endValue)];
                return { label, value };
            });
        }

        // === sub group Custom Pannel Footer ===
        if (props.showCustomFooter) {
            pickerProps.renderExtraFooter = () => props.pannelFooterContent;
        }

        // ====================================
        // === property group Common ===
        // ====================================
        pickerProps.tabIndex = props.tabIndex;

        // ====================================
        // === property group Apperance ===
        // ====================================
        pickerProps.className = props.class;
        pickerProps.style = props.style;

        return <RangePicker {...pickerProps} />;
    }
}
