'use client';

import { Button } from "@/components/ui/button";

const WatchlistButton = ({
    symbol,
    company,
    isInWatchlist,
}: {
    symbol: string;
    company: string;
    isInWatchlist: boolean;
}) => {
    const handleClick = async () => {
        // TODO: Implement add/remove from watchlist
        console.log(`${isInWatchlist ? 'Remove from' : 'Add to'} watchlist:`, symbol, company);
    };

    return (
        <Button
            onClick={handleClick}
            variant={isInWatchlist ? "destructive" : "default"}
            className={isInWatchlist ? "" : "yellow-btn"}
        >
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </Button>
    );
};

export default WatchlistButton;
