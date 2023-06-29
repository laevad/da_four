export default function Circle({ color, handleClick }: { id: number, children: any, color: string, handleClick: any }) {
  return (
    <div
      onClick={handleClick}
      className={`h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 rounded-full border-4 ${color} flex items-center justify-center font-bold border-gray-900/50 hover:border-gray-900/100 cursor-pointer`}
    >
    </div>
  );
}
