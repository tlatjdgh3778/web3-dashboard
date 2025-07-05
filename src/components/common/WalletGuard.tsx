import { useAccount } from "wagmi";

import WalletNotConnected from "./WalletNotConnected";

export default function WalletGuard({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isConnected } = useAccount();
	return <>{isConnected ? children : <WalletNotConnected />}</>;
}
