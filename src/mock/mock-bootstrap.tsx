"use client";

import { useEffect, useState } from "react";

export default function MSWBootstrap({
	children,
}: {
	children: React.ReactNode;
}) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
			import("./browser").then(({ worker }) => {
				worker.start({ onUnhandledRequest: "bypass" }).then(() => {
					console.log("🟢 MSW started");
					setReady(true);
				});
			});
		} else {
			setReady(true);
		}
	}, []);

	if (!ready) return null;

	return <>{children}</>;
}
