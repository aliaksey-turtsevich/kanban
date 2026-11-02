import type { Priority, Task } from "@/types/kanban";

import { Button } from "./Button";
import { Badge } from "./Badge";


interface TaskCardProps {
  task: Task;
  onDelete?: (id: string) => void;
}

const priorityVariants: Record<Priority, 'default' | 'warning' | 'danger'> = {
  low: 'default',
  medium: 'warning',
  high: 'danger',
};

export const TaskCard = ({ task, onDelete }: TaskCardProps) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-colors flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-medium text-slate-100">{task.title}</h4>
        <Badge variant={priorityVariants[task.priority]}>
          {task.priority}
        </Badge>
      </div>

      {task.description && (
        <p className="text-xs text-slate-400 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800/60">
        {onDelete && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(task.id)}
            className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
          >
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};