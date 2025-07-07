import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function TokenAvatar({ src }: { src: string }) {
	return (
		<Avatar>
			<AvatarImage src={src} />
			<AvatarFallback>{src.charAt(0)}</AvatarFallback>
		</Avatar>
	);
}
