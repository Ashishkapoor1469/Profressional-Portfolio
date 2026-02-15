export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-start">
      <div className="font-display text-3xl tracking-tighter uppercase text-white">
        Ashish
      </div>

      <nav className="flex flex-col items-end space-y-1 text-sm uppercase tracking-widest text-white">
        <a className="flex items-center gap-2 hover:text-white">
          Home <span className="w-1.5 h-1.5 bg-white rounded-full" />
        </a>
        {["About", "Services", "News"].map(item => (
          <a
            key={item}
            className="opacity-70 hover:opacity-100 transition"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
