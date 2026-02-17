export function Section({ title, description, cardTitle, cardDescription }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-6 md:px-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80">{description}</p>
        </div>

        {/* RIGHT CARD */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-md border border-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">{cardTitle}</h3>
            <p className="text-white/70 text-base leading-relaxed">
              {cardDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
