import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";

const TableLoaderSkeleton = () => {
    // Define how many rows you want to display
    const rows = new Array(10).fill(null);

    return (
        <div className=" pl-10 min-w-max ">
            <div className=" py-10 space-y-8 w-full max-w-4xl">
                <Skeleton className="h-10 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
                <Skeleton className=" h-32 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            </div>
            <Table>
                <TableHeader className="bg-[#f9fafb]">
                    <TableRow>
                        <TableCell className="px-2">Transaction</TableCell>
                        <TableCell className="px-2">Amount</TableCell>
                        <TableCell className="px-2">Status</TableCell>
                        <TableCell className="px-2">Date</TableCell>
                        <TableCell className="px-2 max-md:hidden">Channel</TableCell>
                        <TableCell className="px-2 max-md:hidden">Category</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((_, index) => (
                        <TableRow key={index}>
                            <TableCell className="max-w-[250px] pl-2 pr-10">
                                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded"></div>
                            </TableCell>
                            <TableCell className="pl-2 pr-10">
                                <div className="animate-pulse bg-gray-200 h-4 w-1/4 rounded"></div>
                            </TableCell>
                            <TableCell className="pl-2 pr-10">
                                <div className="animate-pulse bg-gray-200 h-4 w-1/4 rounded"></div>
                            </TableCell>
                            <TableCell className="min-w-32 pl-2 pr-10">
                                <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
                            </TableCell>
                            <TableCell className="pl-2 pr-10 capitalize min-w-24 whitespace-nowrap">
                                <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
                            </TableCell>
                            <TableCell className="pl-2 pr-10 max-md:hidden">
                                <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded"></div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableLoaderSkeleton;