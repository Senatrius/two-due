'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Info } from '../../Info';
import { Input } from '../../Input';
import { TodoList } from '../../TodoList';

export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

const getStoredTodos = (slug: string) => {
  const storedTodo =
    typeof window !== 'undefined' ? localStorage.getItem(`todo-${slug}`) : null;

  if (storedTodo) {
    return JSON.parse(storedTodo);
  } else {
    return [];
  }
};

export default function Index() {
  const path = usePathname()!.replace('/', '');

  const [error, setError] = useState<string>('');
  const [taskInput, setTaskInput] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [tasks, setTasks] = useState<ITodo[]>([
    { id: '0', task: 'Loading. Please wait...', completed: false }
  ]);

  useEffect(() => {
    setTasks(getStoredTodos(path));
  }, []);

  useEffect(() => {
    localStorage.setItem(`todo-${path}`, JSON.stringify(tasks));
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
      task => task.id === (e.target as HTMLButtonElement).id
    );

    newTasks.splice(clickedTaskIndex, 1);
    setTasks(newTasks);
  };

  const deleteCompletedItems = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTasks = [...tasks];

    const incompleteTasks = newTasks.filter(task => !task.completed);

    setTasks(incompleteTasks);
  };

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskInput === '') {
      setError('Please enter a task');
      return;
    }

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
        error={error}
        setError={setError}
        onSubmit={addNewTodo}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
      <TodoList
        {...{
          tasks,
          setTasks,
          filteredTasks,
          filter,
          setFilter,
          toggleItem,
          deleteItem,
          deleteCompletedItems
        }}
      />
      <Info />
    </main>
  );
}
