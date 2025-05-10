"use client";

import React from "react";
import { Grid } from "@mui/material";
import GlitchElement from "../../shared/GlitchElement";

const ShortSection1 = () => {
	return (
		<Grid
			container
			spacing={0}
			sx={{
				minHeight: "40svh",
				width: "100%",
				background: "linear-gradient(to left, #a8ff78, #78ffd6)",
				overflow: "hidden",
				position: "relative",
			}}
		>
			{/* Figuras geométricas distribuidas por toda la sección */}
			<div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
				{/* Grupo 1 - Esquina superior izquierda */}
				<GlitchElement
					style={{
						width: "120px",
						height: "120px",
						left: "5%",
						top: "10%"
					}}
				/>
				<GlitchElement
					style={{
						width: "60px",
						height: "60px",
						left: "15%",
						top: "5%"
					}}
				/>

				{/* Grupo 2 - Centro superior */}
				<GlitchElement
					style={{
						width: "80px",
						height: "80px",
						left: "35%",
						top: "15%"
					}}
				/>
				<GlitchElement
					style={{
						width: "40px",
						height: "40px",
						left: "45%",
						top: "8%"
					}}
				/>

				{/* Grupo 3 - Esquina superior derecha */}
				<GlitchElement
					style={{
						width: "150px",
						height: "150px",
						right: "5%",
						top: "5%"
					}}
				/>
				<GlitchElement
					style={{
						width: "50px",
						height: "50px",
						right: "18%",
						top: "15%"
					}}
				/>

				{/* Grupo 4 - Centro izquierda */}
				<GlitchElement
					style={{
						width: "40px",
						height: "120px",
						left: "10%",
						top: "40%"
					}}
				/>
				<GlitchElement
					style={{
						width: "30px",
						height: "30px",
						left: "20%",
						top: "45%"
					}}
				/>

				{/* Grupo 5 - Centro */}
				<GlitchElement
					style={{
						width: "70px",
						height: "70px",
						left: "40%",
						top: "40%"
					}}
				/>

				{/* Grupo 6 - Centro derecha */}
				<GlitchElement
					style={{
						width: "100px",
						height: "40px",
						right: "15%",
						top: "45%"
					}}
				/>

				{/* Grupo 7 - Esquina inferior izquierda */}
				<GlitchElement
					style={{
						width: "90px",
						height: "90px",
						left: "5%",
						bottom: "10%"
					}}
				/>
				<GlitchElement
					style={{
						width: "40px",
						height: "40px",
						left: "18%",
						bottom: "5%"
					}}
				/>

				{/* Grupo 8 - Centro inferior */}
				<GlitchElement
					style={{
						width: "60px",
						height: "60px",
						left: "35%",
						bottom: "15%"
					}}
				/>
				<GlitchElement
					style={{
						width: "120px",
						height: "40px",
						left: "45%",
						bottom: "8%"
					}}
				/>

				{/* Grupo 9 - Esquina inferior derecha */}
				<GlitchElement
					style={{
						width: "130px",
						height: "80px",
						right: "5%",
						bottom: "10%"
					}}
				/>
				<GlitchElement
					style={{
						width: "50px",
						height: "50px",
						right: "22%",
						bottom: "5%"
					}}
				/>
			</div>

			{/* Contenido de la sección */}
			<Grid
				item
				xs={6}
				style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", zIndex: 2, position: "relative" }}
			></Grid>
			<Grid
				item
				xs={6}
				style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", zIndex: 2, position: "relative" }}
			></Grid>
		</Grid>
	);
};

export default ShortSection1;
