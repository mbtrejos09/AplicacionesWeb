import type { Route } from "./+types/home";
import React, { useState } from 'react';
import AppHeader from "~/shared/AppHeader";
import AppTaskContainer from "~/shared/AppTaskContainer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function queryDb() {
  return [
  { id: 'task1', name:'Task 1', checked: false },
  { id: 'task2', name:'Task 2', checked: true },
  { id: 'task3', name:'Task 3', checked: false }
  ];
}
//create a component that renders a list of tasks
export default function Home() {
  
  const [tasks, setTasks] = useState(queryDb());

  const handleTaskChange = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task));
  };

  
  return (
    <> 
      <AppHeader tasks = {tasks}/>
      
    <main>  
        <AppTaskContainer tasks = {tasks} taskChange = {handleTaskChange}/>
    </main>
    </>
  )
  
}


