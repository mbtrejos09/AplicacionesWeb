import type { AppTask } from "~/interfaces/AppTask";

export default function AppHeader({ tasks }: { tasks: AppTask[]}) {
    return <header>
        <div>
            <span id="taskCounter"><b>{tasks.filter(t => !t.checked).length}</b> tasks</span>
            <div id="taskDate">
                <b>Domingo</b> 18,<br/> <span>Mayo</span>
            </div>
        </div>
    </header>
}