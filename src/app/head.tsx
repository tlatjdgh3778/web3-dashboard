import { generateIOSStartupImages } from "./_pwa/ios-startup-images";

export default function Head() {
	const images = generateIOSStartupImages();

	return (
		<>
			{Object.entries(images).map(([key, value]) => {
				const { media, href } = JSON.parse(value);
				return (
					<link
						key={key}
						rel="apple-touch-startup-image"
						media={media}
						href={href}
					/>
				);
			})}
		</>
	);
}
