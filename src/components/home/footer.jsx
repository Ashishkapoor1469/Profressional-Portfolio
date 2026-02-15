export default function Footer() {
  return (
    <footer className="py-12 px-8 flex justify-between bg-black items-center text-[10px] uppercase tracking-widest border-t">
      <div>© 2025 ELARA VANCE STUDIO</div>

      <div className="flex gap-8">
        {["Instagram", "Behance", "Dribbble"].map(s => (
          <a key={s} className="hover:text-primary">
            {s}
          </a>
        ))}
      </div>

      <button
        onClick={() =>
          document.documentElement.classList.toggle("dark")
        }
        className="p-2 border bg-black"
      >
        Toggle Mode
      </button>
    </footer>
  );
}
