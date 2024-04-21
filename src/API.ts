/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateToDoListInput = {
  id?: string | null,
  title: string,
  desc?: string | null,
};

export type ModelToDoListConditionInput = {
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  and?: Array< ModelToDoListConditionInput | null > | null,
  or?: Array< ModelToDoListConditionInput | null > | null,
  not?: ModelToDoListConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ToDoList = {
  __typename: "ToDoList",
  id: string,
  title: string,
  desc?: string | null,
  toDo_s?: ModelToDoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelToDoConnection = {
  __typename: "ModelToDoConnection",
  items:  Array<ToDo | null >,
  nextToken?: string | null,
};

export type ToDo = {
  __typename: "ToDo",
  id: string,
  title: string,
  desc?: string | null,
  priority: Priority,
  todolistID: string,
  createdDate?: string | null,
  completedDate?: string | null,
  dueDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum Priority {
  HIGHEST = "HIGHEST",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  LOWEST = "LOWEST",
}


export type UpdateToDoListInput = {
  id: string,
  title?: string | null,
  desc?: string | null,
};

export type DeleteToDoListInput = {
  id: string,
};

export type CreateToDoInput = {
  id?: string | null,
  title: string,
  desc?: string | null,
  priority: Priority,
  todolistID: string,
  createdDate?: string | null,
  completedDate?: string | null,
  dueDate?: string | null,
};

export type ModelToDoConditionInput = {
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  priority?: ModelPriorityInput | null,
  todolistID?: ModelIDInput | null,
  createdDate?: ModelStringInput | null,
  completedDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  and?: Array< ModelToDoConditionInput | null > | null,
  or?: Array< ModelToDoConditionInput | null > | null,
  not?: ModelToDoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelPriorityInput = {
  eq?: Priority | null,
  ne?: Priority | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateToDoInput = {
  id: string,
  title?: string | null,
  desc?: string | null,
  priority?: Priority | null,
  todolistID?: string | null,
  createdDate?: string | null,
  completedDate?: string | null,
  dueDate?: string | null,
};

export type DeleteToDoInput = {
  id: string,
};

export type ModelToDoListFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelToDoListFilterInput | null > | null,
  or?: Array< ModelToDoListFilterInput | null > | null,
  not?: ModelToDoListFilterInput | null,
};

export type ModelToDoListConnection = {
  __typename: "ModelToDoListConnection",
  items:  Array<ToDoList | null >,
  nextToken?: string | null,
};

export type ModelToDoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  priority?: ModelPriorityInput | null,
  todolistID?: ModelIDInput | null,
  createdDate?: ModelStringInput | null,
  completedDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelToDoFilterInput | null > | null,
  or?: Array< ModelToDoFilterInput | null > | null,
  not?: ModelToDoFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionToDoListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionToDoListFilterInput | null > | null,
  or?: Array< ModelSubscriptionToDoListFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionToDoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  todolistID?: ModelSubscriptionIDInput | null,
  createdDate?: ModelSubscriptionStringInput | null,
  completedDate?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionToDoFilterInput | null > | null,
  or?: Array< ModelSubscriptionToDoFilterInput | null > | null,
};

export type CreateToDoListMutationVariables = {
  input: CreateToDoListInput,
  condition?: ModelToDoListConditionInput | null,
};

export type CreateToDoListMutation = {
  createToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateToDoListMutationVariables = {
  input: UpdateToDoListInput,
  condition?: ModelToDoListConditionInput | null,
};

export type UpdateToDoListMutation = {
  updateToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteToDoListMutationVariables = {
  input: DeleteToDoListInput,
  condition?: ModelToDoListConditionInput | null,
};

export type DeleteToDoListMutation = {
  deleteToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateToDoMutationVariables = {
  input: CreateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type CreateToDoMutation = {
  createToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateToDoMutationVariables = {
  input: UpdateToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type UpdateToDoMutation = {
  updateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteToDoMutationVariables = {
  input: DeleteToDoInput,
  condition?: ModelToDoConditionInput | null,
};

export type DeleteToDoMutation = {
  deleteToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetToDoListQueryVariables = {
  id: string,
};

export type GetToDoListQuery = {
  getToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListToDoListsQueryVariables = {
  filter?: ModelToDoListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToDoListsQuery = {
  listToDoLists?:  {
    __typename: "ModelToDoListConnection",
    items:  Array< {
      __typename: "ToDoList",
      id: string,
      title: string,
      desc?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetToDoQueryVariables = {
  id: string,
};

export type GetToDoQuery = {
  getToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListToDosQueryVariables = {
  filter?: ModelToDoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToDosQuery = {
  listToDos?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      id: string,
      title: string,
      desc?: string | null,
      priority: Priority,
      todolistID: string,
      createdDate?: string | null,
      completedDate?: string | null,
      dueDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ToDosByTodolistIDQueryVariables = {
  todolistID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelToDoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ToDosByTodolistIDQuery = {
  toDosByTodolistID?:  {
    __typename: "ModelToDoConnection",
    items:  Array< {
      __typename: "ToDo",
      id: string,
      title: string,
      desc?: string | null,
      priority: Priority,
      todolistID: string,
      createdDate?: string | null,
      completedDate?: string | null,
      dueDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateToDoListSubscriptionVariables = {
  filter?: ModelSubscriptionToDoListFilterInput | null,
};

export type OnCreateToDoListSubscription = {
  onCreateToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateToDoListSubscriptionVariables = {
  filter?: ModelSubscriptionToDoListFilterInput | null,
};

export type OnUpdateToDoListSubscription = {
  onUpdateToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteToDoListSubscriptionVariables = {
  filter?: ModelSubscriptionToDoListFilterInput | null,
};

export type OnDeleteToDoListSubscription = {
  onDeleteToDoList?:  {
    __typename: "ToDoList",
    id: string,
    title: string,
    desc?: string | null,
    toDo_s?:  {
      __typename: "ModelToDoConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnCreateToDoSubscription = {
  onCreateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnUpdateToDoSubscription = {
  onUpdateToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteToDoSubscriptionVariables = {
  filter?: ModelSubscriptionToDoFilterInput | null,
};

export type OnDeleteToDoSubscription = {
  onDeleteToDo?:  {
    __typename: "ToDo",
    id: string,
    title: string,
    desc?: string | null,
    priority: Priority,
    todolistID: string,
    createdDate?: string | null,
    completedDate?: string | null,
    dueDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
