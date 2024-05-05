import React, { useEffect, useState } from "react";
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './style.scss';
import TodoList from './TodoList';

type Props ={
  todo:Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {



  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
   <form action="" className='"todos__single'>
     <span className='todos__singhle--text'>{todo.todo}</span>
     <div>
       <span className='icon'>
      < AiFillEdit />
       </span>
     </div>
     <div>
     <span className='icon'>
       <AiFillDelete/>
     </span>
     </div>
     <div>
     <span className='icon' onClick={()=>handleDone(todo.id)}>
       <MdDone/>
     </span>
     </div>
   </form>
  )
}

export default SingleTodo