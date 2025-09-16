import { http, HttpResponse } from "msw";

import { mockGasPrice } from "../data/mockGasPrice";

export const handlers = [
	// gas price
	http.get("https://api.etherscan.io/api", async () => {
		await new Promise((resolve) => setTimeout(resolve, 3000));

		return HttpResponse.json({
			status: "1",
			message: "OK",
			result: mockGasPrice,
		});
	}),
];
