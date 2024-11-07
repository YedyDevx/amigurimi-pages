export default function Pagination({ totalPages, currentPage, onPageChange }) {
   return (
      <div className="flex justify-center gap-2 mt-6">
         {Array.from({ length: totalPages }, (_, i) => (
            <button
               key={i}
               onClick={() => onPageChange(i + 1)}
               className={`px-4 py-2 rounded-lg sm:px-4 sm:py-2 ${
                  currentPage === i + 1
                     ? 'bg-[#fb9a00] text-white font-bold text-xl sm:text-xl'
                     : 'bg-gray-300 text-[#105c65]'
               } hover:bg-[#f24877] hover:text-white font-bold transition-colors duration-300`}
            >
               {i + 1}
            </button>
         ))}
      </div>
   );
}
