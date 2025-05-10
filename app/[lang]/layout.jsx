import "../globals.css";

import { IBM_Plex_Mono, Share_Tech_Mono, Tiny5 } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { getDictionary } from "@/get-dictionary";
import MainRoot from "./_components/layout/MainRoot";
import theme from "@/kernel/theme";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "./_components/layout/Footer";

const menuFont = IBM_Plex_Mono({
	variable: "--font-global",
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
});

const auxFont1 = Tiny5({
	variable: "--font-aux-1",
	subsets: ["latin"],
	weight: ["400"],
});

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${menuFont.variable} ${auxFont1.variable}`}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<MainRoot>{children}</MainRoot>
					</ThemeProvider>
				</AppRouterCacheProvider>
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
