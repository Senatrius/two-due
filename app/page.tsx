'use client';

import { DragDropContext } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { Info } from './Info';
import { Input } from './Input';
import { TodoList } from './TodoList';
import demoData from '../public/demoTodos.json';

export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

const getStoredTodos = () => {
  const storedTodo =
    typeof window !== 'undefined' ? localStorage.getItem('todo') : null;

  if (storedTodo) {
    return JSON.parse(storedTodo);
  } else {
    return demoData;
  }
};

export default function Index() {
  const [taskInput, setTaskInput] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [tasks, setTasks] = useState<ITodo[]>(getStoredTodos());

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks =
    filter === 'completed'
      ? tasks.filter(task => task.completed === true)
      : filter === 'active'
      ? tasks.filter(task => task.completed === false)
      : tasks;

  const toggleItem = (e: React.MouseEvent<HTMLInputElement>) => {
    const newTasks = [...tasks];

    const clickedTaskIndex = newTasks.findIndex(
      task => task.id === (e.target as HTMLInputElement).id
    );
    newTasks[clickedTaskIndex].completed =
      !newTasks[clickedTaskIndex].completed;
    setTasks(newTasks);
  };

  const deleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTasks = [...tasks];

    const clickedTaskIndex = newTasks.findIndex(
      task => task.id === (e.target as HTMLInputElement).id
    );

    newTasks.splice(clickedTaskIndex, 1);
    setTasks(newTasks);
  };

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      task: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  return (
    <main>
      <Input
        onSubmit={addNewTodo}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
      <TodoList
        {...{ tasks, filteredTasks, filter, setFilter, toggleItem, deleteItem }}
      />
      <Info />
    </main>
  );
}
