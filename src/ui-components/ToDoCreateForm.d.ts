/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ToDoCreateFormInputValues = {
    title?: string;
    desc?: string;
    priority?: string;
    todolistID?: string;
    createdDate?: string;
    completedDate?: string;
    dueDate?: string;
};
export declare type ToDoCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    todolistID?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    completedDate?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoCreateFormOverridesProps = {
    ToDoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<SelectFieldProps>;
    todolistID?: PrimitiveOverrideProps<AutocompleteProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    completedDate?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoCreateFormProps = React.PropsWithChildren<{
    overrides?: ToDoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onSuccess?: (fields: ToDoCreateFormInputValues) => void;
    onError?: (fields: ToDoCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onValidate?: ToDoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoCreateForm(props: ToDoCreateFormProps): React.ReactElement;
