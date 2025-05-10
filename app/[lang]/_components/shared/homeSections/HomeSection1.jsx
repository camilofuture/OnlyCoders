"use client";

import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "../../../../../hooks/useTranslation";
import XButton from "../XButton";

const HomeSection1 = () => {
	const { t } = useTranslation();
	const gridContainerRef = useRef(null);

	// Función para crear partículas adicionales dinámicamente
	useEffect(() => {
		if (!gridContainerRef.current) return;

		// Crear partículas adicionales aleatoriamente
		const createRandomParticles = () => {
			const container = gridContainerRef.current;
			const numParticles = 3; // Número de partículas adicionales (reducido para mejor rendimiento)

			for (let i = 0; i < numParticles; i++) {
				const particle = document.createElement("div");
				particle.className = "tron-particle";

				// Posición aleatoria
				const top = Math.random() * 100;
				const left = Math.random() * 100;

				// Tamaño aleatorio entre 2 y 5 px
				const size = 2 + Math.random() * 3;

				// Duración aleatoria entre 5 y 15 segundos
				const duration = 5 + Math.random() * 10;

				// Dirección aleatoria
				const endX = (Math.random() - 0.5) * 100;
				const endY = (Math.random() - 0.5) * 100;

				particle.style.top = `${top}%`;
				particle.style.left = `${left}%`;
				particle.style.width = `${size}px`;
				particle.style.height = `${size}px`;
				particle.style.opacity = "0";

				container.appendChild(particle);

				// Aplicar animación con transiciones
				setTimeout(() => {
					particle.style.transition = `transform ${duration}s linear, opacity 0.5s ease-in-out`;
					particle.style.transform = `translate(${endX}vw, ${endY}vh)`;
					particle.style.opacity = "1";

					setTimeout(() => {
						particle.style.opacity = "0";
						setTimeout(() => {
							if (container.contains(particle)) {
								container.removeChild(particle);
							}
						}, 500);
					}, duration * 1000 - 500);
				}, 10);
			}
		};

		// Crear partículas cada cierto tiempo
		const intervalId = setInterval(createRandomParticles, 2000);

		// Limpiar al desmontar
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<Grid
			container
			spacing={0}
			sx={{
				minHeight: "100%",
				width: "100%",
				position: "relative",
			}}
		>
			{/* Tron Grid Background */}
			<div className="tron-grid-container" ref={gridContainerRef}>
				<div className="tron-grid"></div>
				<div className="tron-glow"></div>
				{/* Partículas predefinidas */}
				<div className="tron-particle particle-1"></div>
				<div className="tron-particle particle-2"></div>
				<div className="tron-particle particle-3"></div>
				<div className="tron-particle particle-4"></div>
				<div className="tron-particle particle-5"></div>
			</div>

			<Grid
				item
				size={12}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					zIndex: 2,
					gap: 0,
				}}
			>
				{/* Announcement Banner */}
				<div
					className="announcement-card"
					onClick={() => window.open("https://github.com/camilofuture/OnlyCoders/commits", "_blank")}
				>
					<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
						<span style={{ fontSize: 16, color: "#ffffff", fontWeight: 300, fontFamily: "var(--font-global)" }}>
							{t("home.section1.announcement")}
						</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#ffffff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</div>
				</div>
				<div style={{ color: "#fff" }}>
					<h1
						style={{
							textAlign: "center",
							fontFamily: "var(--font-global)",
							backgroundImage: "linear-gradient(to right, #a8ff78, #78ffd6)",
							fontSize: 70,
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							fontWeight: 700,
							marginBottom: 10,
							width: "100%",
						}}
					>
						{t("home.section1.title")}
					</h1>
					<p
						style={{
							textAlign: "center",
							fontFamily: "var(--font-global)",
							fontSize: 18,
							color: "#ffffffAf",
							maxWidth: "75%",
							margin: "0 auto",
							lineHeight: 1.8,
							fontWeight: 300,
						}}
					>
						{t("home.section1.text_part1")}{" "}
						<span style={{ fontWeight: 600, color: "#fff" }}>{t("home.section1.text_legacy")}</span>
						{t("home.section1.text_part2")}{" "}
						<span style={{ fontWeight: 600, color: "#fff" }}>{t("home.section1.text_fans")}</span>
						{t("home.section1.text_part3")}{" "}
						<span style={{ fontWeight: 600, color: "#fff" }}>{t("home.section1.text_income")} </span>
						{t("home.section1.text_part4")}{" "}
						<span style={{ fontWeight: 600, color: "#fff" }}>{t("home.section1.text_audience")} </span>
						{t("home.section1.text_part5")}
					</p>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: 25,
						zIndex: 2,
						marginTop: 40,
					}}
				>
					<XButton
						width="fit-content"
						variant="maincolor"
						disabled={false}
						xsize="l"
						action={() => {}}
						href="http://192.168.20.42:3000"
						target="_blank"
						//nopadding
						message={t("home.section1.button_get_started")}
					/>
					<XButton
						width="fit-content"
						variant="outlined"
						disabled={false}
						xsize="l"
						action={() => {}}
						href="http://192.168.20.42:3000"
						target="_blank"
						//nopadding
						message={t("home.section1.button_learn_culture")}
					/>
				</div>
			</Grid>
		</Grid>
	);
};

export default HomeSection1;
