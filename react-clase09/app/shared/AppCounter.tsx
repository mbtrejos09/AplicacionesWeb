import type { AppTask } from "~/interfaces/AppTask";


export default function AppCounter({ tasks}: {tasks: AppTask[]}){
    return <>
        <p> El total de tareas pendientes es: {tasks.filter(t => !t.checked).length}</p>
        <p> El total de tareas completadas es: {tasks.filter(t => t.checked).length}</p>
    </>
}