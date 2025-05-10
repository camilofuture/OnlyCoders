import { APPBAR_HEIGHT } from "@/kernel/constants";
import HomeSection1 from "./_components/shared/homeSections/HomeSection1";
import HomeSection2 from "./_components/shared/homeSections/HomeSection2";
import Footer from "./_components/layout/Footer";
import ShortSection1 from "./_components/shared/homeSections/ShortSection1";

export default function Home() {
	return (
		<div
			style={{
				minHeight: `calc(100svh - ${APPBAR_HEIGHT}px)`,
				height: `calc(100svh - ${APPBAR_HEIGHT}px)`,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<HomeSection1 />
			<HomeSection2 />
			<ShortSection1 />
			<Footer />
		</div>
	);
}
