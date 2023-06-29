export default function Circle({ children, color, handleClick }: { id: number, children: any, color: string, handleClick: any }) {
  return (
    <div
      onClick={handleClick}
      className={`h-16 sm:h-20 w-16 sm:w-20 rounded-full border-4 ${color} flex items-center justify-center font-bold border-gray-900/50 hover:border-gray-900/100 cursor-pointer`}
    >
    </div>
  );
}
