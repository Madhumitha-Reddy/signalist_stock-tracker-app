import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { WATCHLIST_TABLE_HEADER } from "@/lib/constants";

const sampleData = [
    {
        company: "Apple Inc.",
        symbol: "AAPL",
        price: "$178.52",
        change: "+1.25%",
        marketCap: "$2.8T",
        peRatio: "28.5",
        alert: "None",
        action: "View",
    },
    {
        company: "Microsoft Corp.",
        symbol: "MSFT",
        price: "$378.91",
        change: "-0.45%",
        marketCap: "$2.9T",
        peRatio: "35.2",
        alert: "None",
        action: "View",
    },
    {
        company: "Tesla Inc.",
        symbol: "TSLA",
        price: "$248.50",
        change: "+2.10%",
        marketCap: "$780B",
        peRatio: "62.4",
        alert: "Active",
        action: "View",
    },
    {
        company: "Amazon.com Inc.",
        symbol: "AMZN",
        price: "$178.25",
        change: "+0.85%",
        marketCap: "$1.8T",
        peRatio: "58.3",
        alert: "None",
        action: "View",
    },
    {
        company: "NVIDIA Corp.",
        symbol: "NVDA",
        price: "$495.22",
        change: "+3.45%",
        marketCap: "$1.2T",
        peRatio: "65.8",
        alert: "Active",
        action: "View",
    },
];

const WatchlistTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {WATCHLIST_TABLE_HEADER.map((header) => (
                        <TableHead key={header} className="text-left">
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {sampleData.map((row) => (
                    <TableRow key={row.symbol}>
                        <TableCell className="text-left">{row.company}</TableCell>
                        <TableCell className="text-left">{row.symbol}</TableCell>
                        <TableCell className="text-left">{row.price}</TableCell>
                        <TableCell className="text-left">{row.change}</TableCell>
                        <TableCell className="text-left">{row.marketCap}</TableCell>
                        <TableCell className="text-left">{row.peRatio}</TableCell>
                        <TableCell className="text-left">{row.alert}</TableCell>
                        <TableCell className="text-left">{row.action}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default WatchlistTable;
