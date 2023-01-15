'use client';

import { useState, useEffect } from 'react';
import { Info } from './Info';
import { Input } from './Input';
import { TodoItem } from './TodoItem';
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

  return (
    <main>
      <Input />
      <TodoList
        tasks={tasks.filter(task => task.completed === false).length}
        {...{ filter, setFilter }}>
        {filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.completed}
            onClick={toggleItem}
          />
        ))}
      </TodoList>
      <Info />
    </main>
  );
}
