import React, { useState, useEffect, useRef } from 'react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator, Table, TableHead, TableRow, TableCell, TableBody, Heading, Label, Button, TableFoot, Pagination } from '@aws-amplify/ui-react';
import './App.css';
import Header from './component/Header/Header';
import { ToDoCreateForm, ToDoListCreateForm, ToDoListUpdateForm, ToDoUpdateForm } from './ui-components';
import { ComponentType } from 'react';
import { generateClient } from "aws-amplify/api";
import { listToDos } from "./graphql/queries";


type PopUpComponent = {
  [key: number]: ComponentType;
};

const popupForms: PopUpComponent = {
  1: ToDoListCreateForm,
  2: ToDoCreateForm,
  3: ToDoUpdateForm
};

export function App({ signOut, user }: WithAuthenticatorProps) {
  const [popup, setPopup] = useState(0);
  const [todo, setTodo ] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const id = useRef(null);
  const item = useRef({})
  const nextToken = useRef("")
  const [loading, setLoading] = useState(false);
  const client = generateClient();
  const ToDoAll = useRef(0);
  const limitPage = 3;

  const fecthToDoDataAll = async () =>{
    try {
      const result: any = 
        await client.graphql({
          query: listToDos.replaceAll("__typename", "")
        });
        console.log(result)
        ToDoAll.current = Math.ceil(result?.data?.listToDos?.items?.length / limitPage)
    } catch (error) {
      console.error('Error fetching todo all:', error);
    } finally {
    }
  }

  const fecthToDoData = async (value: any) =>{
    setLoading(true);
    try {
      let variables: { limit: number; filter: { or: ({ title: { contains: string }; id?: undefined; } | { id: { contains: string }; title?: undefined; })[]; }; nextToken?: string } = {
        limit: limitPage,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      
      if(nextToken.current){
        variables = {
          ...variables,
          nextToken: nextToken.current,
        };
      }
      const result: any = 
        await client.graphql({
          query: listToDos.replaceAll("__typename", ""),
          variables
        });
      nextToken.current = result?.data?.listToDos?.nextToken
      setTodo(result?.data?.listToDos?.items);
    } catch (error) {
      console.error('Error fetching todo list:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleNextPage = async () => {
    if(hasMorePages && currentPageIndex <= ToDoAll.current){
      await fecthToDoData("")
      console.log(nextToken.current)
      if(!nextToken.current){
        setHasMorePages(false)
      }
    }
    setCurrentPageIndex(currentPageIndex+1);
  }
  

  const fetchToDoLISTdata = async () => {
    
  };

  const editToDo = (data: any) => {
    id.current = data.id
    item.current = data
    setPopup(3);
  }

  const convertToLocal = (date: any) => {
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
    const parts: Record<string, string> = df.formatToParts(date).reduce((acc: Record<string, string>, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}/${parts.month}/${parts.day} ${parts.hour}:${parts.minute}`;
  };

  

    useEffect(() => {
      const fetchData = async () => {
        await fecthToDoDataAll();
        await fecthToDoData("");
        await fetchToDoLISTdata();
      };
      fetchData();
    }, []);



  return (
    <>
      <Header user={user} signOut={signOut} setPopup={setPopup} />
      <div className='popup'>
        {popup > 0 && popupForms[popup] && 
          React.createElement(popupForms[popup], { onCancel: () =>{ setPopup(0)}, id: id.current, toDo: item.current } as any)
        }
      </div>
      <div className="table-conent">
      <Table
          backgroundColor="background.info"
          highlightOnHover={true}
          variation="striped"
          width="78%"
          >
            <TableHead>
              <TableRow textAlign="center">
                <Label htmlFor='table-title' fontSize="25px">TODOs</Label>
              </TableRow>
              <TableRow>
                <TableCell as='th'>No</TableCell>
                <TableCell as='th'>Title</TableCell>
                <TableCell as='th'>Desc</TableCell>
                <TableCell as='th'>Priority</TableCell>
                <TableCell as='th'>Due Date</TableCell>
                <TableCell as='th'>Completed Date</TableCell>
                <TableCell as='th'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {todo.map((item: any, index: number) => (
                  <TableRow key={index+1}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.priority}</TableCell> 
                    <TableCell>{convertToLocal(new Date(item.dueDate))}</TableCell> 
                    <TableCell>{convertToLocal(new Date(item.completedDate))}</TableCell>
                    <TableCell>
                      <Button onClick={()=>{editToDo(item)}}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
        </Table>
        <Pagination
                
                totalPages={ToDoAll.current}
                siblingCount={1}
                currentPage={currentPageIndex}
                hasMorePages={hasMorePages}
                onNext={handleNextPage}
                onPrevious={()=> setCurrentPageIndex(currentPageIndex-1)}
                onChange={(e)=>{setCurrentPageIndex(e ?? 0)}}
          ></Pagination>
      </div>
    </>
  );
}

export default withAuthenticator(App);
