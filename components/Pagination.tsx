"use client";

import { formUrlQuery } from '@/lib/utils';
import { useSearchParams, useRouter } from 'next/navigation'; // Import useRouter from next/router
import { useState } from 'react';
import TableLoaderSkeleton from './TableLoaderSkeleton';
import { Button } from './ui/button';
import Image from 'next/image';

export const Pagination = ({ page, totalPages }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false); // Add loading state

  const handleNavigation = async (type: "prev" | "next") => {
    setLoading(true); // Set loading to true when changing page
  
    const pageNumber = type === "prev" ? page - 1 : page + 1;
  
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: pageNumber.toString(),
    });
  
    router.push(newUrl); // Use shallow routing // Use shallow routing
  
    window.scrollTo(0, 0); // Scroll to the top of the page
    setLoading(false); // Set loading to false after page has loaded
  };

  if (loading) {
    return <TableLoaderSkeleton />; // Render skeleton component while loading
  }

  return (
    <div className="flex justify-between gap-3">
      <Button
        size="lg"
        variant="ghost"
        className="p-0 hover:bg-transparent"
        onClick={() => handleNavigation("prev")}
        disabled={Number(page) <= 1}
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="mr-2"
        />
        Prev
      </Button>
      <p className="text-14 flex items-center px-2">
        {page} / {totalPages}
      </p>
      <Button
        size="lg"
        variant="ghost"
        className="p-0 hover:bg-transparent"
        onClick={() => handleNavigation("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
        <Image
          src="/icons/arrow-left.svg"
          alt="arrow"
          width={20}
          height={20}
          className="ml-2 -scale-x-100"
        />
      </Button>
    </div>
  );
};
