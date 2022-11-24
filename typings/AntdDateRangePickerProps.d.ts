/**
 * This file was generated from AntdDateRangePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export type DisableDateModeEnum = "off" | "positive" | "negative";

export interface AntdDateRangePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    defaultValueStart?: EditableValue<Date>;
    valueStart?: EditableValue<Date>;
    defaultValueEnd?: EditableValue<Date>;
    valueEnd?: EditableValue<Date>;
    format: string;
    onChange?: ActionValue;
    showTime: boolean;
    allowEmptyStart: boolean;
    allowEmptyEnd: boolean;
    onPickerValueChange?: ActionValue;
    pickerValueStart?: EditableValue<Date>;
    pickerValueEnd?: EditableValue<Date>;
    defaultPickerValueStart?: EditableValue<Date>;
    defaultPickerValueEnd?: EditableValue<Date>;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource?: ListValue;
    disableDatesAttribute?: ListAttributeValue<Date>;
    shortcutsDatasource?: ListValue;
    shortcutsLabelAttribute?: ListAttributeValue<string>;
    shortcutsDateAttribute?: ListAttributeValue<Date>;
    showCustomFooter: boolean;
    pannelFooterContent?: ReactNode;
}

export interface AntdDateRangePickerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    defaultValueStart: string;
    valueStart: string;
    defaultValueEnd: string;
    valueEnd: string;
    format: string;
    onChange: {} | null;
    showTime: boolean;
    allowEmptyStart: boolean;
    allowEmptyEnd: boolean;
    onPickerValueChange: {} | null;
    pickerValueStart: string;
    pickerValueEnd: string;
    defaultPickerValueStart: string;
    defaultPickerValueEnd: string;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource: {} | { type: string } | null;
    disableDatesAttribute: string;
    shortcutsDatasource: {} | { type: string } | null;
    shortcutsLabelAttribute: string;
    shortcutsDateAttribute: string;
    showCustomFooter: boolean;
    pannelFooterContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
