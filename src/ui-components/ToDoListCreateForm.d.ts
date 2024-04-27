/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ToDo } from "../API.ts";
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
export declare type ToDoListCreateFormInputValues = {
    title?: string;
    desc?: string;
    toDo_s?: ToDo[];
};
export declare type ToDoListCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    toDo_s?: ValidationFunction<ToDo>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoListCreateFormOverridesProps = {
    ToDoListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    toDo_s?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ToDoListCreateFormProps = React.PropsWithChildren<{
    overrides?: ToDoListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToDoListCreateFormInputValues) => ToDoListCreateFormInputValues;
    onSuccess?: (fields: ToDoListCreateFormInputValues) => void;
    onError?: (fields: ToDoListCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ToDoListCreateFormInputValues) => ToDoListCreateFormInputValues;
    onValidate?: ToDoListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoListCreateForm(props: ToDoListCreateFormProps): React.ReactElement;
