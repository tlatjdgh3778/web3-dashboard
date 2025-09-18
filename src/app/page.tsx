import HomeConnectWallet from "./components/HomeConnectWallet";
import HomeGasTracker from "./components/HomeGasTracker";

export default function Page() {
	return (
		<div className="flex-1 bg-gradient-to-br from-background via-muted/20 to-muted/40 flex items-center justify-center p-4 min-h-screen">
			<div className="max-w-4xl w-full space-y-8">
				<HomeConnectWallet />
				<HomeGasTracker />
			</div>
		</div>
	);
}
