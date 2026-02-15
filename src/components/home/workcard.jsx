export default function WorkCard({ id, img }) {
  return (
    <div className="aspect-4/5 bg-gray-100 dark:bg-zinc-900 group relative overflow-hidden">
      {img && (
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      )}
      <span className="absolute top-2 left-2 text-[10px] font-bold">
        {id}
      </span>
    </div>
  );
}
