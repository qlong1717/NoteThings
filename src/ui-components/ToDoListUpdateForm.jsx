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
  Heading,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getToDoList, listToDos } from "../graphql/queries";
import { updateToDo, updateToDoList } from "../graphql/mutations";
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
export default function ToDoListUpdateForm(props) {
  const {
    id: idProp,
    toDoList: toDoListModelProp,
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
    toDo_s: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [desc, setDesc] = React.useState(initialValues.desc);
  const [toDo_s, setToDo_s] = React.useState(initialValues.toDo_s);
  const [toDo_sLoading, setToDo_sLoading] = React.useState(false);
  const [toDo_sRecords, setToDo_sRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = toDoListRecord
      ? { ...initialValues, ...toDoListRecord, toDo_s: linkedToDo_s }
      : initialValues;
    setTitle(cleanValues.title);
    setDesc(cleanValues.desc);
    setToDo_s(cleanValues.toDo_s ?? []);
    setCurrentToDo_sValue(undefined);
    setCurrentToDo_sDisplayValue("");
    setErrors({});
  };
  const [toDoListRecord, setToDoListRecord] = React.useState(toDoListModelProp);
  const [linkedToDo_s, setLinkedToDo_s] = React.useState([]);
  const canUnlinkToDo_s = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getToDoList.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getToDoList
        : toDoListModelProp;
      const linkedToDo_s = record?.toDo_s?.items ?? [];
      setLinkedToDo_s(linkedToDo_s);
      setToDoListRecord(record);
    };
    queryData();
  }, [idProp, toDoListModelProp]);
  React.useEffect(resetStateValues, [toDoListRecord, linkedToDo_s]);
  const [currentToDo_sDisplayValue, setCurrentToDo_sDisplayValue] =
    React.useState("");
  const [currentToDo_sValue, setCurrentToDo_sValue] = React.useState(undefined);
  const toDo_sRef = React.createRef();
  const getIDValue = {
    toDo_s: (r) => JSON.stringify({ id: r?.id }),
  };
  const toDo_sIdSet = new Set(
    Array.isArray(toDo_s)
      ? toDo_s.map((r) => getIDValue.toDo_s?.(r))
      : getIDValue.toDo_s?.(toDo_s)
  );
  const getDisplayValue = {
    toDo_s: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    desc: [],
    toDo_s: [],
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
  const fetchToDo_sRecords = async (value) => {
    setToDo_sLoading(true);
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
          query: listToDos.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listToDos?.items;
      var loaded = result.filter(
        (item) => !toDo_sIdSet.has(getIDValue.toDo_s?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setToDo_sRecords(newOptions.slice(0, autocompleteLength));
    setToDo_sLoading(false);
  };
  React.useEffect(() => {
    fetchToDo_sRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          desc: desc ?? null,
          toDo_s: toDo_s ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const promises = [];
          const toDo_sToLink = [];
          const toDo_sToUnLink = [];
          const toDo_sSet = new Set();
          const linkedToDo_sSet = new Set();
          toDo_s.forEach((r) => toDo_sSet.add(getIDValue.toDo_s?.(r)));
          linkedToDo_s.forEach((r) =>
            linkedToDo_sSet.add(getIDValue.toDo_s?.(r))
          );
          linkedToDo_s.forEach((r) => {
            if (!toDo_sSet.has(getIDValue.toDo_s?.(r))) {
              toDo_sToUnLink.push(r);
            }
          });
          toDo_s.forEach((r) => {
            if (!linkedToDo_sSet.has(getIDValue.toDo_s?.(r))) {
              toDo_sToLink.push(r);
            }
          });
          toDo_sToUnLink.forEach((original) => {
            if (!canUnlinkToDo_s) {
              throw Error(
                `ToDo ${original.id} cannot be unlinked from ToDoList because todolistID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateToDo.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    todolistID: null,
                  },
                },
              })
            );
          });
          toDo_sToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateToDo.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    todolistID: toDoListRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            desc: modelFields.desc ?? null,
          };
          promises.push(
            client.graphql({
              query: updateToDoList.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: toDoListRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ToDoListUpdateForm")}
      {...rest}
    >
      <Heading
        children="Update ToDoList"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
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
              toDo_s,
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
              toDo_s,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              desc,
              toDo_s: values,
            };
            const result = onChange(modelFields);
            values = result?.toDo_s ?? values;
          }
          setToDo_s(values);
          setCurrentToDo_sValue(undefined);
          setCurrentToDo_sDisplayValue("");
        }}
        currentFieldValue={currentToDo_sValue}
        label={"To do s"}
        items={toDo_s}
        hasError={errors?.toDo_s?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("toDo_s", currentToDo_sValue)
        }
        errorMessage={errors?.toDo_s?.errorMessage}
        getBadgeText={getDisplayValue.toDo_s}
        setFieldValue={(model) => {
          setCurrentToDo_sDisplayValue(
            model ? getDisplayValue.toDo_s(model) : ""
          );
          setCurrentToDo_sValue(model);
        }}
        inputFieldRef={toDo_sRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="To do s"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ToDo"
          value={currentToDo_sDisplayValue}
          options={toDo_sRecords
            .filter((r) => !toDo_sIdSet.has(getIDValue.toDo_s?.(r)))
            .map((r) => ({
              id: getIDValue.toDo_s?.(r),
              label: getDisplayValue.toDo_s?.(r),
            }))}
          isLoading={toDo_sLoading}
          onSelect={({ id, label }) => {
            setCurrentToDo_sValue(
              toDo_sRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentToDo_sDisplayValue(label);
            runValidationTasks("toDo_s", label);
          }}
          onClear={() => {
            setCurrentToDo_sDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchToDo_sRecords(value);
            if (errors.toDo_s?.hasError) {
              runValidationTasks("toDo_s", value);
            }
            setCurrentToDo_sDisplayValue(value);
            setCurrentToDo_sValue(undefined);
          }}
          onBlur={() => runValidationTasks("toDo_s", currentToDo_sDisplayValue)}
          errorMessage={errors.toDo_s?.errorMessage}
          hasError={errors.toDo_s?.hasError}
          ref={toDo_sRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "toDo_s")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || toDoListModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
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
              !(idProp || toDoListModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
