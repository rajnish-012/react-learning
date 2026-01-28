import React, { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  /* Load from localStorage */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setTasks(saved);
  }, []);

  /* Save to localStorage */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(tasks));
  }, [tasks]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        details,
      },
    ]);

    setTitle("");
    setDetails("");
  };

  const deleteHandler = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div
      className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black
                    flex flex-col lg:flex-row gap-10 py-20 px-6 lg:px-20 text-white"
    >
      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="w-full lg:max-w-xl bg-white/5 backdrop-blur-lg
                   border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold mb-6 text-center tracking-wide">
          Add a New Note
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter note heading"
            className="w-full px-5 py-3 rounded-xl bg-black/40 border border-white/10
                       text-white placeholder-zinc-400 outline-none
                       focus:ring-2 focus:ring-white/30 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write details..."
            className="w-full px-5 py-3 h-36 rounded-xl bg-black/40 border border-white/10
                       text-white placeholder-zinc-400 resize-none outline-none
                       focus:ring-2 focus:ring-white/30 transition"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 rounded-xl
                       hover:bg-zinc-200 active:scale-95 transition"
          >
            Add Note
          </button>
        </div>
      </form>

      {/* NOTES */}
      <section className="w-full flex-1 lg:border-l border-white/10 lg:pl-10">
        <h2 className="text-2xl font-semibold mb-6 text-center tracking-wide">
          Recent Notes
        </h2>

        {tasks.length === 0 && (
          <p className="text-center text-zinc-400 mt-20">No notes available</p>
        )}

        <div
          className="flex flex-wrap justify-center lg:justify-start
                        gap-6 max-h-[500px] overflow-y-auto no-scrollbar"
        >
          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative h-52 w-40 rounded-xl text-black
                         bg-cover bg-center pt-9 pb-4 px-4
                         bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
            >
              <button
                onClick={() => deleteHandler(task.id)}
                className="absolute top-2 right-2 text-xs
                           bg-black/70 text-white px-2 py-1 rounded"
              >
                ✕
              </button>

              <h3 className="text-lg font-bold leading-tight line-clamp-2">
                {task.title}
              </h3>

              <p
                className="mt-2 text-xs font-semibold text-gray-700
                            leading-tight line-clamp-4 break-words"
              >
                {task.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
