export default function Card({ children, className, isFullCenter = false }) {
  return (
    <div
      className={`border border-red-700 rounded-lg border-b-4 p-4 w-full  hover:-translate-y-1.5 transition ${isFullCenter ? 'flex justify-center items-center' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
