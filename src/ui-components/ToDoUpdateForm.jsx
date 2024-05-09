/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getToDo, getToDoList, listToDoLists } from "../graphql/queries";
import { updateToDo } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ToDoUpdateForm(props) {
  const {
    id: idProp,
    toDo: toDoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    title: "",
    desc: "",
    priority: "",
    todolistID: undefined,
    completedDate: "",
    dueDate: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [todolistID, setTodolistID] = React.useState(initialValues.todolistID);
  const [todolistIDLoading, setTodolistIDLoading] = React.useState(false);
  const [todolistIDRecords, setTodolistIDRecords] = React.useState([]);
  const [selectedTodolistIDRecords, setSelectedTodolistIDRecords] =
    React.useState([]);
  const [completedDate, setCompletedDate] = React.useState(
    initialValues.completedDate
  );
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = toDoRecord
      ? { ...initialValues, ...toDoRecord, todolistID }
      : initialValues;
    setTitle(cleanValues.title);
    setDesc(cleanValues.desc);
    setPriority(cleanValues.priority);
    setTodolistID(cleanValues.todolistID);
    setCurrentTodolistIDValue(undefined);
    setCurrentTodolistIDDisplayValue("");
    setCompletedDate(cleanValues.completedDate);
    setDueDate(cleanValues.dueDate);
    setErrors({});
  };
  const [toDoRecord, setToDoRecord] = React.useState(toDoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getToDo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getToDo
        : toDoModelProp;
      const todolistIDRecord = record ? record.todolistID : undefined;
      const toDoListRecord = todolistIDRecord
        ? (
            await client.graphql({
              query: getToDoList.replaceAll("__typename", ""),
              variables: { id: todolistIDRecord },
            })
          )?.data?.getToDoList
        : undefined;
      setTodolistID(todolistIDRecord);
      setSelectedTodolistIDRecords([toDoListRecord]);
      setToDoRecord(record);
    };
    queryData();
  }, [idProp, toDoModelProp]);
  React.useEffect(resetStateValues, [toDoRecord, todolistID]);
  const [currentTodolistIDDisplayValue, setCurrentTodolistIDDisplayValue] =
    React.useState("");
  const [currentTodolistIDValue, setCurrentTodolistIDValue] =
    React.useState(undefined);
  const todolistIDRef = React.createRef();
  const getDisplayValue = {
    todolistID: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    desc: [],
    priority: [{ type: "Required" }],
    todolistID: [{ type: "Required" }],
    completedDate: [],
    dueDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  const fetchTodolistIDRecords = async (value) => {
    setTodolistIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listToDoLists.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listToDoLists?.items;
      var loaded = result.filter((item) => todolistID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setTodolistIDRecords(newOptions.slice(0, autocompleteLength));
    setTodolistIDLoading(false);
  };
  React.useEffect(() => {
    fetchTodolistIDRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="5px"
      columnGap="5px"
      padding="10px"
      borderRadius="8px"
      position="fixed"
      width="50%"
      left="28%"
      top="15%"
      zIndex= "2"
      backgroundColor="Menu"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          desc: desc ?? null,
          priority,
          todolistID,
          completedDate: completedDate ?? null,
          dueDate: dueDate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateToDo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: toDoRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ToDoUpdateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="Title"
          isRequired={true}
          isReadOnly={false}
          value={title}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title: value,
                desc,
                priority,
                todolistID,
                completedDate,
                dueDate,
              };
              const result = onChange(modelFields);
              value = result?.title ?? value;
            }
            if (errors.title?.hasError) {
              runValidationTasks("title", value);
            }
            setTitle(value);
          }}
          onBlur={() => runValidationTasks("title", title)}
          errorMessage={errors.title?.errorMessage}
          hasError={errors.title?.hasError}
          {...getOverrideProps(overrides, "title")}
        ></TextField>
        <TextField
          label="Desc"
          isRequired={false}
          isReadOnly={false}
          value={desc}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                desc: value,
                priority,
                todolistID,
                completedDate,
                dueDate,
              };
              const result = onChange(modelFields);
              value = result?.desc ?? value;
            }
            if (errors.desc?.hasError) {
              runValidationTasks("desc", value);
            }
            setDesc(value);
          }}
          onBlur={() => runValidationTasks("desc", desc)}
          errorMessage={errors.desc?.errorMessage}
          hasError={errors.desc?.hasError}
          {...getOverrideProps(overrides, "desc")}
        ></TextField>
        <SelectField
          label="Priority"
          placeholder="Please select an option"
          isDisabled={false}
          value={priority}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                desc,
                priority: value,
                todolistID,
                completedDate,
                dueDate,
              };
              const result = onChange(modelFields);
              value = result?.priority ?? value;
            }
            if (errors.priority?.hasError) {
              runValidationTasks("priority", value);
            }
            setPriority(value);
          }}
          onBlur={() => runValidationTasks("priority", priority)}
          errorMessage={errors.priority?.errorMessage}
          hasError={errors.priority?.hasError}
          {...getOverrideProps(overrides, "priority")}
        >
          <option
            children="Highest"
            value="HIGHEST"
            {...getOverrideProps(overrides, "priorityoption0")}
          ></option>
          <option
            children="High"
            value="HIGH"
            {...getOverrideProps(overrides, "priorityoption1")}
          ></option>
          <option
            children="Medium"
            value="MEDIUM"
            {...getOverrideProps(overrides, "priorityoption2")}
          ></option>
          <option
            children="Low"
            value="LOW"
            {...getOverrideProps(overrides, "priorityoption3")}
          ></option>
          <option
            children="Lowest"
            value="LOWEST"
            {...getOverrideProps(overrides, "priorityoption4")}
          ></option>
        </SelectField>
      </Grid>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              desc,
              priority,
              todolistID: value,
              completedDate,
              dueDate,
            };
            const result = onChange(modelFields);
            value = result?.todolistID ?? value;
          }
          setTodolistID(value);
          setCurrentTodolistIDValue(undefined);
        }}
        currentFieldValue={currentTodolistIDValue}
        label={"Todolist"}
        items={todolistID ? [todolistID] : []}
        hasError={errors?.todolistID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("todolistID", currentTodolistIDValue)
        }
        errorMessage={errors?.todolistID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.todolistID(
                todolistIDRecords.find((r) => r.id === value) ??
                  selectedTodolistIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentTodolistIDDisplayValue(
            value
              ? getDisplayValue.todolistID(
                  todolistIDRecords.find((r) => r.id === value) ??
                    selectedTodolistIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentTodolistIDValue(value);
          const selectedRecord = todolistIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedTodolistIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={todolistIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Todolist"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ToDoList"
          value={currentTodolistIDDisplayValue}
          options={todolistIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.todolistID?.(r),
            }))}
          isLoading={todolistIDLoading}
          onSelect={({ id, label }) => {
            setCurrentTodolistIDValue(id);
            setCurrentTodolistIDDisplayValue(label);
            runValidationTasks("todolistID", label);
          }}
          onClear={() => {
            setCurrentTodolistIDDisplayValue("");
          }}
          defaultValue={todolistID}
          onChange={(e) => {
            let { value } = e.target;
            fetchTodolistIDRecords(value);
            if (errors.todolistID?.hasError) {
              runValidationTasks("todolistID", value);
            }
            setCurrentTodolistIDDisplayValue(value);
            setCurrentTodolistIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("todolistID", currentTodolistIDValue)
          }
          errorMessage={errors.todolistID?.errorMessage}
          hasError={errors.todolistID?.hasError}
          ref={todolistIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "todolistID")}
        ></Autocomplete>
      </ArrayField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Completed date"
          isRequired={false}
          isReadOnly={false}
          type="datetime-local"
          value={completedDate && convertToLocal(new Date(completedDate))}
          onChange={(e) => {
            let value =
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                title,
                desc,
                priority,
                todolistID,
                completedDate: value,
                dueDate,
              };
              const result = onChange(modelFields);
              value = result?.completedDate ?? value;
            }
            if (errors.completedDate?.hasError) {
              runValidationTasks("completedDate", value);
            }
            setCompletedDate(value);
          }}
          onBlur={() => runValidationTasks("completedDate", completedDate)}
          errorMessage={errors.completedDate?.errorMessage}
          hasError={errors.completedDate?.hasError}
          {...getOverrideProps(overrides, "completedDate")}
        ></TextField>
        <TextField
          label="Due date"
          isRequired={false}
          isReadOnly={false}
          type="datetime-local"
          value={dueDate && convertToLocal(new Date(dueDate))}
          onChange={(e) => {
            let value =
              e.target.value === ""
                ? ""
                : new Date(e.target.value).toISOString();
            if (onChange) {
              const modelFields = {
                title,
                desc,
                priority,
                todolistID,
                completedDate,
                dueDate: value,
              };
              const result = onChange(modelFields);
              value = result?.dueDate ?? value;
            }
            if (errors.dueDate?.hasError) {
              runValidationTasks("dueDate", value);
            }
            setDueDate(value);
          }}
          onBlur={() => runValidationTasks("dueDate", dueDate)}
          errorMessage={errors.dueDate?.errorMessage}
          hasError={errors.dueDate?.hasError}
          {...getOverrideProps(overrides, "dueDate")}
        ></TextField>
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || toDoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.xxs.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || toDoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
