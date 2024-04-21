/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateToDoList = /* GraphQL */ `subscription OnCreateToDoList($filter: ModelSubscriptionToDoListFilterInput) {
  onCreateToDoList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateToDoListSubscriptionVariables,
  APITypes.OnCreateToDoListSubscription
>;
export const onUpdateToDoList = /* GraphQL */ `subscription OnUpdateToDoList($filter: ModelSubscriptionToDoListFilterInput) {
  onUpdateToDoList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateToDoListSubscriptionVariables,
  APITypes.OnUpdateToDoListSubscription
>;
export const onDeleteToDoList = /* GraphQL */ `subscription OnDeleteToDoList($filter: ModelSubscriptionToDoListFilterInput) {
  onDeleteToDoList(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteToDoListSubscriptionVariables,
  APITypes.OnDeleteToDoListSubscription
>;
export const onCreateToDo = /* GraphQL */ `subscription OnCreateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onCreateToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateToDoSubscriptionVariables,
  APITypes.OnCreateToDoSubscription
>;
export const onUpdateToDo = /* GraphQL */ `subscription OnUpdateToDo($filter: ModelSubscriptionToDoFilterInput) {
  onUpdateToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateToDoSubscriptionVariables,
  APITypes.OnUpdateToDoSubscription
>;
export const onDeleteToDo = /* GraphQL */ `subscription OnDeleteToDo($filter: ModelSubscriptionToDoFilterInput) {
  onDeleteToDo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteToDoSubscriptionVariables,
  APITypes.OnDeleteToDoSubscription
>;
