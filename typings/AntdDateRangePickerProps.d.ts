/**
 * This file was generated from AntdDateRangePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export type PickerEnum = "date" | "week" | "month" | "quarter" | "year";

export type PlacementEnum = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

export type LocaleEnum = "zh_CN" | "en_US";

export type DisableDateModeEnum = "off" | "positive" | "negative";

export interface AntdDateRangePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    picker: PickerEnum;
    defaultValueStart?: EditableValue<Date>;
    defaultValueEnd?: EditableValue<Date>;
    format: string;
    placeholderStart: string;
    placeholderEnd: string;
    valueStart?: EditableValue<Date>;
    valueEnd?: EditableValue<Date>;
    onChange?: ActionValue;
    open?: EditableValue<boolean>;
    onOpenChange?: ActionValue;
    showTime: boolean;
    placement: PlacementEnum;
    allowEmptyStart: boolean;
    allowEmptyEnd: boolean;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    defaultPickerValueStart?: EditableValue<Date>;
    defaultPickerValueEnd?: EditableValue<Date>;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource?: ListValue;
    disableDatesAttribute?: ListAttributeValue<Date>;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    shortcutsDatasource?: ListValue;
    shortcutsLabelAttribute?: ListAttributeValue<string>;
    shortcutsValueStartAttribute?: ListAttributeValue<Date>;
    shortcutsValueEndAttribute?: ListAttributeValue<Date>;
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
    picker: PickerEnum;
    defaultValueStart: string;
    defaultValueEnd: string;
    format: string;
    placeholderStart: string;
    placeholderEnd: string;
    valueStart: string;
    valueEnd: string;
    onChange: {} | null;
    open: string;
    onOpenChange: {} | null;
    showTime: boolean;
    placement: PlacementEnum;
    allowEmptyStart: boolean;
    allowEmptyEnd: boolean;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    defaultPickerValueStart: string;
    defaultPickerValueEnd: string;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource: {} | { type: string } | null;
    disableDatesAttribute: string;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    shortcutsDatasource: {} | { type: string } | null;
    shortcutsLabelAttribute: string;
    shortcutsValueStartAttribute: string;
    shortcutsValueEndAttribute: string;
    showCustomFooter: boolean;
    pannelFooterContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
