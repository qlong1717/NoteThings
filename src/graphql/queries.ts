/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getToDoList = /* GraphQL */ `query GetToDoList($id: ID!) {
  getToDoList(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetToDoListQueryVariables,
  APITypes.GetToDoListQuery
>;
export const listToDoLists = /* GraphQL */ `query ListToDoLists(
  $filter: ModelToDoListFilterInput
  $limit: Int
  $nextToken: String
) {
  listToDoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      desc
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListToDoListsQueryVariables,
  APITypes.ListToDoListsQuery
>;
export const getToDo = /* GraphQL */ `query GetToDo($id: ID!) {
  getToDo(id: $id) {
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
` as GeneratedQuery<APITypes.GetToDoQueryVariables, APITypes.GetToDoQuery>;
export const listToDos = /* GraphQL */ `query ListToDos(
  $filter: ModelToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListToDosQueryVariables, APITypes.ListToDosQuery>;
export const toDosByTodolistID = /* GraphQL */ `query ToDosByTodolistID(
  $todolistID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelToDoFilterInput
  $limit: Int
  $nextToken: String
) {
  toDosByTodolistID(
    todolistID: $todolistID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ToDosByTodolistIDQueryVariables,
  APITypes.ToDosByTodolistIDQuery
>;
