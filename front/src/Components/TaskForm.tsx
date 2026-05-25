import { useState } from "react";

export default function TaskForm() {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [footer, setFooter] = useState("");

  const validateForm = () => {
    if (!header.trim()) {
      alert("El título de la tarea es obligatorio");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Nueva tarea:", {
        header,
        body,
        footer,
      });
      setHeader("");
      setBody("");
      setFooter("");
    }
  };

  return (
    <div className="w-full max-w-sm bg-surface rounded-xl shadow-md border border-border p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white placeholder-gray-400"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Description..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white placeholder-gray-400 resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-700">
            Footer (optional)
          </label>
          <input
            type="text"
            placeholder="Extras..."
            value={footer}
            onChange={(e) => setFooter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-3 bg-accent hover:bg-accent/90 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm active:scale-98"
        >
          Crear Tarea
        </button>
      </form>
    </div>
  );
}
