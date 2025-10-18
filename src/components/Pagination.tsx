// import { Button } from './ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
//     const maxVisible = 5;

//     if (totalPages <= maxVisible) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 3) {
//         for (let i = 1; i <= 4; i++) {
//           pages.push(i);
//         }
//         pages.push('...');
//         pages.push(totalPages);
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(1);
//         pages.push('...');
//         for (let i = totalPages - 3; i <= totalPages; i++) {
//           pages.push(i);
//         }
//       } else {
//         pages.push(1);
//         pages.push('...');
//         pages.push(currentPage - 1);
//         pages.push(currentPage);
//         pages.push(currentPage + 1);
//         pages.push('...');
//         pages.push(totalPages);
//       }
//     }

//     return pages;
//   };

//   if (totalPages <= 1) return null;

//   return (
//     <div className="flex items-center justify-center gap-2 mt-8">
//       <Button
//         variant="outline"
//         size="sm"
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <ChevronLeft className="h-4 w-4" />
//       </Button>

//       {getPageNumbers().map((page, index) => (
//         <div key={index}>
//           {page === '...' ? (
//             <span className="px-2 text-gray-400">...</span>
//           ) : (
//             <Button
//               variant={currentPage === page ? 'default' : 'outline'}
//               size="sm"
//               onClick={() => onPageChange(page as number)}
//               className={currentPage === page ? 'bg-[#00AEEF] hover:bg-[#0099d4]' : ''}
//             >
//               {page}
//             </Button>
//           )}
//         </div>
//       ))}

//       <Button
//         variant="outline"
//         size="sm"
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         <ChevronRight className="h-4 w-4" />
//       </Button>
//     </div>
//   );
// }

import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const scrollToProductGrid = () => {
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange(page); // Chama a função original para mudar a página
    scrollToProductGrid(); // Faz o scroll para o início do ProductGrid
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {getPageNumbers().map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="px-2 text-gray-400">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page as number)}
              className={
                currentPage === page ? "bg-[#00AEEF] hover:bg-[#0099d4]" : ""
              }
            >
              {page}
            </Button>
          )}
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
