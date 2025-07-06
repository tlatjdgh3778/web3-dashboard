import { z } from "zod";

const isValidEthAddress = (address: string): boolean => {
	return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const ethAddressSchema = z.object({
	address: z
		.string()
		.min(1, "Please enter a wallet address")
		.refine((value) => isValidEthAddress(value), {
			message: "Please enter a valid Ethereum address",
		}),
});

export type EthAddressForm = z.infer<typeof ethAddressSchema>;
