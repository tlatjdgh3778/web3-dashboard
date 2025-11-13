import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetTransactionFee } from "@/hooks/useGetTransactionFee";

export default function TxFee({ hash }: { hash: string }) {
    return (
        <Suspense fallback={<TxFeeSkeleton />}>
            <TxFeeContent hash={hash} />
        </Suspense>
    );
}

const TxFeeContent = ({ hash }: { hash: string }) => {
    const { data: txFee } = useGetTransactionFee({ hash });

    return <div className="text-sm text-muted-foreground">{txFee?.txFeeEth.toFixed(6)} ETH</div>;
};

const TxFeeSkeleton = () => {
    return <Skeleton className="h-4 w-10" />;
};
