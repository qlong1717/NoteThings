/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
};
export declare type ToDoListCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoListCreateFormOverridesProps = {
    ToDoListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoListCreateFormProps = React.PropsWithChildren<{
    overrides?: ToDoListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToDoListCreateFormInputValues) => ToDoListCreateFormInputValues;
    onSuccess?: (fields: ToDoListCreateFormInputValues) => void;
    onError?: (fields: ToDoListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToDoListCreateFormInputValues) => ToDoListCreateFormInputValues;
    onValidate?: ToDoListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoListCreateForm(props: ToDoListCreateFormProps): React.ReactElement;
