import { useAccount } from "wagmi";

import WalletNotConnected from "./wallet-not-connected";

export default function WalletGuard({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isConnected } = useAccount();
	return <>{isConnected ? children : <WalletNotConnected />}</>;
}
