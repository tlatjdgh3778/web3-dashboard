"use client";

import { useAccount } from "wagmi";

import { useGetTotalBalances } from "@/hooks/useGetTotalBalances";
import { useGetTokenPricesFromWalletBalances } from "./useGetTokenPricesFromWalletBalances";
import { getTokenPrices } from "@/utils/getTokenPrices";
import { getTotalWalletBalance } from "@/utils/getTotalWalletBalance";

export const useGetWalletTotalBalance = () => {
	const { address } = useAccount();

	const { data: walletBalances, isLoading } = useGetTotalBalances({
		address: address as string,
	});

	const { tokenPriceData, isTokenQuotesLoading } =
		useGetTokenPricesFromWalletBalances({
			walletBalances,
		});

	const tokenPrices = getTokenPrices({
		walletBalances,
		tokenPriceData,
	});

	const totalBalance = getTotalWalletBalance({
		walletBalances: tokenPrices,
	});

	return {
		walletBalances,
		totalBalance,
		tokenPrices,
		isLoading: isLoading || isTokenQuotesLoading,
	};
};
