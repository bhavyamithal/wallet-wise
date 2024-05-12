import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import { cn, formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"


const CategoryBadge = ({ category }: CategoryBadgeProps) => {

    const {
        borderColor,
        backgroundColor,
        textColor,
        chipBackgroundColor
    } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default;

    return (
        <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
            <div className={cn('size-2 rounded-full', backgroundColor)} />
            <p className={cn('text-[12px] font-medium', textColor)}>
                {category}
            </p>
        </div>
    )
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-[#f9fafb]">

                <TableRow>
                    <TableHead className="px-2">Transaction</TableHead>
                    <TableHead className="px-2">Amount</TableHead>
                    <TableHead className="px-2">Status</TableHead>
                    <TableHead className="px-2">Date</TableHead>
                    <TableHead className="px-2 max-md:hidden">Channel</TableHead>
                    <TableHead className="px-2 max-md:hidden">Category</TableHead>
                </TableRow>

            </TableHeader>
            <TableBody>

                {transactions.map((t: Transaction) => {
                    const status = getTransactionStatus(new Date(t.date));
                    let amount = formatAmount(t.amount * 80);

                    // const isCredit = t.type === 'credit';
                    // const isDebit = t.type === 'debit';
                    // console.log(t);
                    // console.log(t.type);

                    return (
                        <TableRow key={t.id} className={`${amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT `}>

                            <TableCell className="max-w-[250px] pl-2 pr-10">
                                <div className=" flex items-center gap-3">
                                    <h1 className="text-14 truncate font-semibold text-[#344054]">
                                        {removeSpecialCharacters(t.name)}
                                    </h1>
                                </div>
                            </TableCell>

                            <TableCell className={`pl-2 pr-10 font-semibold ${amount[0] === '-' ? 'text-[#f04438]' : 'text-[#039855]'}`}>
                                {amount}
                            </TableCell>

                            <TableCell className="pl-2 pr-10">
                                <CategoryBadge category={status} />
                            </TableCell>

                            <TableCell className="pl-2 pr-10 min-w-32">
                                {formatDateTime(new Date(t.date)).dateTime}
                            </TableCell>

                            <TableCell className="pl-2 pr-10 min-w-24 max-md:hidden">
                                {t.paymentChannel}
                            </TableCell>

                            <TableCell className="pl-2 pr-10 max-md:hidden">
                                <CategoryBadge category={t.category} />
                            </TableCell>

                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>

    )
}

export default TransactionsTable