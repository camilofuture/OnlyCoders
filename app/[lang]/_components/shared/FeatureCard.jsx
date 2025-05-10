"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";

/**
 * Componente de tarjeta de características con estilo moderno
 * @param {object} props - Propiedades del componente
 * @param {string} props.title - Título de la tarjeta
 * @param {string} props.description - Descripción de la característica
 * @param {React.ReactNode} props.Icon - Icono o elemento visual para la tarjeta
 * @param {string} props.gradient - Gradiente de color para el borde superior y título
 */
const FeatureCard = ({ title, description, gradient, Icon }) => {
	const [isHovering, setIsHovering] = useState(false);
	return (
		<Box
			onMouseEnter={() => {
				if (!isHovering) {
					setIsHovering(true);
					// Duración total: 3 animaciones de 2s cada una + 1s de transición final = 7s
					setTimeout(() => setIsHovering(false), 7000);
				}
			}}
			className="feature-card"
			sx={{
				width: "70%",
				background: "#ffffff10",
				border: "1px solid #ffffff20",
				borderRadius: 10,
				padding: "32px",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				gap: 1,
				position: "relative",
				overflow: "hidden",
				fontFamily: "var(--font-global)",
				//minHeight: "100%",
			}}
		>
			<h3
				style={{
					textAlign: "left",
					backgroundImage: gradient,
					fontSize: 24,
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					margin: 0,
					textTransform: "uppercase",
				}}
			>
				{title}
			</h3>

			<p
				style={{
					color: "#ffffffBf",
					textAlign: "left",
					fontSize: 14,
					lineHeight: 1.6,
					margin: 0,
				}}
			>
				{description}
			</p>

			{Icon && (
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						marginTop: 40,
						cursor: "pointer",
					}}
				>
					<Icon
						size={160}
						style={{
							color: "#ffffff55", // Color base siempre definido
							filter: `drop-shadow(0 0 10px ${gradient.split(",")[0].replace("linear-gradient(to right", "").trim()})`,
							animationName: isHovering ? "iconGlowUp" : "none",
							animationDuration: "2s",
							animationIterationCount: 3,
							animationTimingFunction: "ease-in-out",
							transition: "color 1s ease-out", // Transición suave para el color cuando termina la animación
						}}
					/>
				</div>
			)}
		</Box>
	);
};

export default FeatureCard;

/*
		<Box
				className="card-icon"
				sx={{
					width: "100px",
					height: "100px",
					margin: "0 auto 20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "#2a2a2a",
					borderRadius: "12px",
					transition: "transform 0.3s ease",
				}}
			>
				{icon}
			</Box> 
      */
