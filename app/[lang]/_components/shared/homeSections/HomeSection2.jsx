"use client";

import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import FeatureCard from "../FeatureCard";
import { useTranslation } from "../../../../../hooks/useTranslation";
import {
	Gi3dHammer,
	GiBackup,
	GiBurningMeteor,
	GiCoins,
	GiMagicGate,
	GiNestedEclipses,
	GiTransportationRings,
} from "react-icons/gi";

const HomeSection2 = () => {
	const { t } = useTranslation();

	// Definimos los datos para las tres tarjetas usando useMemo
	const cards = useMemo(
		() => [
			{
				title: t("home.section2.cards.0.title"),
				description: t("home.section2.cards.0.description"),
				gradient: "linear-gradient(to right, #29cf77, #64bcf5)",
				icon: GiMagicGate,
			},
			{
				title: t("home.section2.cards.1.title"),
				description: t("home.section2.cards.1.description"),
				gradient: "linear-gradient(to right, #29cf77, #64bcf5)",
				icon: GiNestedEclipses,
			},
			{
				title: t("home.section2.cards.2.title"),
				description: t("home.section2.cards.2.description"),
				gradient: "linear-gradient(to right, #29cf77, #64bcf5)",
				icon: GiCoins,
			},
		],
		[t]
	);

	return (
		<Grid
			container
			spacing={0}
			sx={{
				minHeight: "100%",
				width: "90%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 10,
				fontFamily: "var(--font-global)",
			}}
		>
			<Grid item size={12}>
				<div style={{ color: "#fff", textAlign: "center" }}>
					<h1
						style={{
							textAlign: "left",
							backgroundColor: "#fff",

							//"linear-gradient(to right, #29cf77, #64bcf5, #ffb22b)",
							fontSize: 34,
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							marginBottom: "10px",
						}}
					>
						{t("home.section2.title")}
					</h1>
					<p
						style={{
							color: "#ffffffAf",
							fontSize: 17,
							margin: "0 auto",
							textAlign: "left",
						}}
					>
						{t("home.section2.subtitle")}
					</p>
				</div>
			</Grid>

			<Grid
				container
				spacing={3}
				size={12}
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 0,
				}}
			>
				{cards.map((card, index) => (
					<Grid key={index} item size={4} sx={{ display: "flex", justifyContent: "center" }}>
						<FeatureCard title={card.title} description={card.description} Icon={card.icon} gradient={card.gradient} />
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default HomeSection2;
