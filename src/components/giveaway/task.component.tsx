export type TaskProps = {
  name: string;
  tasks: Task[];
  completed: boolean;
};

export type Task = {
  name: string;
  done: boolean;
};

export function Task({ name, tasks, completed }: TaskProps) {
  const children = tasks.map((task, index) => (
    <li key={index} className="flex items-center gap-2">
      {task.done && <i className="ri-check-line text-xl"></i>}
      {!task.done && <i className="ri-close-line text-xl"></i>}
      <span>{task.name}</span>
    </li>
  ));

  return (
    <div className="relative flex flex-col rounded-xl border border-violet-500/10 bg-neutral-900/10 px-6 py-6 backdrop-blur-3xl">
      <h1 className="mb-6 text-lg">{name}</h1>
      <ul>{children}</ul>

      <div className="absolute bottom-5 right-5">
        <div className="rounded-xl border border-violet-500/20 px-4 py-1 text-sm">
          {completed ? 'Completed' : 'Not Completed'}
        </div>
      </div>
    </div>
  );
}
