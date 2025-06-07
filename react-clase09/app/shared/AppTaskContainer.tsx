import type { AppTask } from "~/interfaces/AppTask";
import AppCounter from "./AppCounter";

export default function AppTaskContainer({ tasks, taskChange }: { tasks: AppTask[], taskChange: (id: string) => void }){
    return <section id="app">
            <div>
                <h2>Tareas pendientes</h2> 
                <div id="pendingTasksContainer">
                    {tasks.filter(task =>!task.checked).map (task=> (
                        <div key={task.id} className="task">
                            <input type="checkbox" id={task.id} checked={task.checked} onChange={()=> taskChange(task.id)} />
                            <label htmlFor={task.id}>{task.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Tareas completadas</h2>
                <div id="completedTasksContainer">
                {tasks.filter(task => task.checked).map (task=> (
                        <div key={task.id} className="task">
                            <input type="checkbox" id={task.id} checked={task.checked} onChange={()=>taskChange(task.id)}/>
                            <label htmlFor={task.id}>{task.name}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <AppCounter tasks={tasks} />
            </div>
        </section>
}