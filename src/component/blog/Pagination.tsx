import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex justify-center my-8">
      <nav className="flex items-center gap-2">
        <Link
          href={`?page=${currentPage - 1}`}
          className={`px-4 py-2 rounded-md border hidden md:block ${
            currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-100"
          }`}
        >
          Previous
        </Link>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <Link
              key={pageNumber}
              href={`?page=${pageNumber}`}
              className={`px-4 py-2 rounded-md border ${
                currentPage === pageNumber ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}

        <Link
          href={`?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded-md border hidden md:block ${
            currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-100"
          }`}
        >
          Next
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
