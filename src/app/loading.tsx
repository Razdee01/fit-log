
export default function GlobalLoading() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3">
      {/* Animated Spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-800 border-t-[#c8ff00]" />
      
      <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
        Loading exercises...
      </p>
    </div>
  );
}