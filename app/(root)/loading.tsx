import LoaderSkeleton from '@/components/LoaderSkeleton';
import RightSidebarSkeleton from '@/components/RightSidebarSkeleton';
import TableLoaderSkeleton from '@/components/TableLoaderSkeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex">
      <div className="flex-grow pr-16 py-6">
        <TableLoaderSkeleton />
      </div>
      <div className="flex-shrink-0">
        <RightSidebarSkeleton />
      </div>
    </div>
  );
};

export default Loading;
