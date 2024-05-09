/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ToDoUpdateFormInputValues = {
    title?: string;
    desc?: string;
    priority?: string;
    todolistID?: string;
    completedDate?: string;
    dueDate?: string;
};
export declare type ToDoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    desc?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    todolistID?: ValidationFunction<string>;
    completedDate?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoUpdateFormOverridesProps = {
    ToDoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    desc?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<SelectFieldProps>;
    todolistID?: PrimitiveOverrideProps<AutocompleteProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    completedDate?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToDoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toDo?: ToDo;
    onSubmit?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onSuccess?: (fields: ToDoUpdateFormInputValues) => void;
    onError?: (fields: ToDoUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onValidate?: ToDoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoUpdateForm(props: ToDoUpdateFormProps): React.ReactElement;
