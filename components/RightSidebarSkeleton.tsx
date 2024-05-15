import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RightSidebarSkeleton = () => {
    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner animate-pulse" />
                <div className="profile">
                    <div className="profile-img animate-pulse">
                        {/* Placeholder content */}
                    </div>
                    <div className="profile-details gap-2">
                        <h1 className="profile-name bg-gray-200 h-6 w-40 rounded animate-pulse" />
                        <p className="profile-email bg-gray-200 h-4 w-36 rounded animate-pulse" />
                    </div>
                </div>
            </section>

            <section className="banks">
                <div className="flex w-full justify-between">
                    <h2 className="header-2 bg-gray-200 h-6 w-28 rounded animate-pulse" />
                    <Link href={'/'} className="flex items-center">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center">
                            <Image src={'/icons/plus.svg'} width={20} height={20} alt="Add Bank" />
                        </div>
                        <h2 className="text-14 font-semibold text-gray-600 ml-2 bg-gray-200 h-4 w-20 rounded animate-pulse" />
                    </Link>
                </div>

                <div className="relative">
                    <div className="absolute right-0 top-8">
                        <div className="bg-blue-100 w-56 h-36 rounded-2xl mb-4 animate-pulse" />
                    </div>
                    <div className="bg-blue-100 w-56 h-36 rounded-2xl mb-4 animate-pulse" />
                </div>

                <div className="flex flex-1 mt-4 flex-col gap-6">
                    <h2 className="header-2 bg-gray-200 h-6 w-36 rounded animate-pulse" />
                    <div className="space-y-5">
                        <div className="bg-gray-200 h-16 w-72 rounded animate-pulse" />
                        <div className="bg-gray-200 h-16 w-72 rounded animate-pulse" />
                        <div className="bg-gray-200 h-16 w-72 rounded animate-pulse" />
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default RightSidebarSkeleton;
