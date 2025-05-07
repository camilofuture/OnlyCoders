import { Chakra_Petch } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/get-dictionary";
import MainRoot from "./_components/layout/MainRoot";

const logoFont = Chakra_Petch({
	variable: "--font-logo",
	subsets: ["latin"],
	weight: ["400"],
});

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${logoFont.variable}`}>
				<MainRoot>{children}</MainRoot>
			</body>
		</html>
	);
};

export const generateMetadata = async ({ params: { locale } }) => {
	const t = await getDictionary(locale);

	return {
		title: t.metadata.root.title,
		description: t.metadata.root.description,
		openGraph: {
			title: t.metadata.root.title,
			description: t.metadata.root.description,
			url: "https://onlycoders.dev",
			type: "website",
			images: [
				{
					url: "https://onlycoders.dev/og-image.jpg",
					width: 1200,
					height: 630,
					alt: "OnlyCoders • For Devs, by Devs",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t.metadata.root.title,
			description: t.metadata.root.description,
			images: ["https://onlycoders.dev/og-image.jpg"],
			site: "@onlycodersdev", // opcional
			creator: "@onlycodersdev", // opcional
		},
	};
};

export default RootLayout;

//suppressHydrationWarning={true}
