import { hidePropertiesIn, hidePropertyIn } from "@mendix/pluggable-widgets-tools";
import { AntdDateRangePickerPreviewProps } from "../typings/AntdDateRangePickerProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string;
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    values: AntdDateRangePickerPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    if (values.disableDateMode === "off") {
        hidePropertiesIn(defaultProperties, values, ["disableDatesDatasource", "disableDatesAttribute"]);
    }
    if (values.showCustomFooter === false) {
        hidePropertyIn(defaultProperties, values, "pannelFooterContent");
    }
    if (values.onPickerValueChange === null) {
        hidePropertiesIn(defaultProperties, values, ["pickerValueStart", "pickerValueEnd"]);
    }

    return defaultProperties;
}

// export function check(_values: AntdDateRangePickerPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }

export function getPreview(values: AntdDateRangePickerPreviewProps, _isDarkMode: boolean): PreviewProps {
    // Customize your pluggable widget appearance for Studio Pro.
    const calendarSvgImage = `<svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>`;
    const calendarInputPreview: PreviewProps = {
        type: "RowLayout",
        columnSize: "grow",
        padding: 5,
        borders: true,
        borderWidth: 1,
        borderRadius: 5,
        children: [
            {
                type: "Container",
                grow: 1,
                children: [
                    {
                        type: "Text",
                        fontSize: 10,
                        content: "Start time"
                    }
                ]
            },
            {
                type: "Container",
                grow: 0,
                children: [
                    {
                        type: "Text",
                        fontSize: 10,
                        content: " - "
                    }
                ]
            },
            {
                type: "Container",
                grow: 1,
                children: [
                    {
                        type: "Text",
                        fontSize: 10,
                        content: "End time"
                    }
                ]
            },
            {
                type: "Image",
                document: calendarSvgImage,
                grow: 0,
                height: 16
            }
        ]
    };
    if (!values.showCustomFooter) {
        return {
            type: "Container",
            children: [calendarInputPreview]
        };
    } else {
        const customFooterPreview: PreviewProps = {
            type: "Container",
            borders: true,
            borderWidth: 1,
            children: [
                {
                    type: "DropZone",
                    property: values.pannelFooterContent,
                    placeholder: "Drop your custom footer of picker pannel here"
                }
            ]
        };
        return {
            type: "Container",
            children: [calendarInputPreview, customFooterPreview]
        };
    }
}

// export function getCustomCaption(values: AntdDateRangePickerPreviewProps, platform: Platform): string {
//     return "AntdDateRangePicker";
// }
