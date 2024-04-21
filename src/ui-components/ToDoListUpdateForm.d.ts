/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ToDoList } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoListUpdateFormInputValues = {
    title?: string;
    desc?: string;
};
export declare type ToDoListUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoListUpdateFormOverridesProps = {
    ToDoListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToDoListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toDoList?: ToDoList;
    onSubmit?: (fields: ToDoListUpdateFormInputValues) => ToDoListUpdateFormInputValues;
    onSuccess?: (fields: ToDoListUpdateFormInputValues) => void;
    onError?: (fields: ToDoListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToDoListUpdateFormInputValues) => ToDoListUpdateFormInputValues;
    onValidate?: ToDoListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoListUpdateForm(props: ToDoListUpdateFormProps): React.ReactElement;
