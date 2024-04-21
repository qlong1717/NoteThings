/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createToDoList = /* GraphQL */ `mutation CreateToDoList(
  $input: CreateToDoListInput!
  $condition: ModelToDoListConditionInput
) {
  createToDoList(input: $input, condition: $condition) {
    id
    title
    desc
    toDo_s {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateToDoListMutationVariables,
  APITypes.CreateToDoListMutation
>;
export const updateToDoList = /* GraphQL */ `mutation UpdateToDoList(
  $input: UpdateToDoListInput!
  $condition: ModelToDoListConditionInput
) {
  updateToDoList(input: $input, condition: $condition) {
    id
    title
    desc
    toDo_s {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateToDoListMutationVariables,
  APITypes.UpdateToDoListMutation
>;
export const deleteToDoList = /* GraphQL */ `mutation DeleteToDoList(
  $input: DeleteToDoListInput!
  $condition: ModelToDoListConditionInput
) {
  deleteToDoList(input: $input, condition: $condition) {
    id
    title
    desc
    toDo_s {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteToDoListMutationVariables,
  APITypes.DeleteToDoListMutation
>;
export const createToDo = /* GraphQL */ `mutation CreateToDo(
  $input: CreateToDoInput!
  $condition: ModelToDoConditionInput
) {
  createToDo(input: $input, condition: $condition) {
    id
    title
    desc
    priority
    todolistID
    createdDate
    completedDate
    dueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateToDoMutationVariables,
  APITypes.CreateToDoMutation
>;
export const updateToDo = /* GraphQL */ `mutation UpdateToDo(
  $input: UpdateToDoInput!
  $condition: ModelToDoConditionInput
) {
  updateToDo(input: $input, condition: $condition) {
    id
    title
    desc
    priority
    todolistID
    createdDate
    completedDate
    dueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateToDoMutationVariables,
  APITypes.UpdateToDoMutation
>;
export const deleteToDo = /* GraphQL */ `mutation DeleteToDo(
  $input: DeleteToDoInput!
  $condition: ModelToDoConditionInput
) {
  deleteToDo(input: $input, condition: $condition) {
    id
    title
    desc
    priority
    todolistID
    createdDate
    completedDate
    dueDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteToDoMutationVariables,
  APITypes.DeleteToDoMutation
>;
