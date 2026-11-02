import type { Task, Column as ColumnType } from '@/types/kanban';
import { Button } from './Button';
import { TaskCard } from './TaskCard';


interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  onAddTask?: (columnId: string) => void;
  onDeleteTask?: (taskId: string) => void;
}

export const Column = ({ column, tasks, onAddTask, onDeleteTask }: ColumnProps) => {
  return (
    <div className="flex flex-col w-80 bg-slate-950/50 border border-slate-800/80 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
      {/* head */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-100">{column.title}</h3>
          <span className="px-2 py-0.5 text-xs font-medium bg-slate-800 text-slate-400 rounded-full">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* task list */}
      <div className="flex flex-col gap-3 flex-1 min-h-[150px] overflow-y-auto pr-1">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-24 border border-dashed border-slate-800 rounded-xl text-xs text-slate-500">
            Нет задач
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={onDeleteTask} />
          ))
        )}
      </div>

      {/* add task in column */}
      {onAddTask && (
        <div className="pt-3 mt-3 border-t border-slate-800/60">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onAddTask(column.id)}
            className="w-full justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-dashed border-slate-800 hover:border-slate-700"
          >
            + Добавить карточку
          </Button>
        </div>
      )}
    </div>
  );
};