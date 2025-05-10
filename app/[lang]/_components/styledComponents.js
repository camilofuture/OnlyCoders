"use client";

import { APPBAR_HEIGHT } from "@/kernel/constants";
import { AppBar, List, ListItemButton, styled } from "@mui/material";

export const LayoutAppBar = styled(AppBar)(({ theme, permanentdrawer }) => ({
	display: "flex",
	position: "fixed", // Cambiado a fixed para que se mantenga fijo durante el scroll
	flexDirection: "row",
	backgroundAttachment: "fixed",

	background: "#000",
	minHeight: APPBAR_HEIGHT,
	height: APPBAR_HEIGHT,
	maxHeight: APPBAR_HEIGHT,
	width: "100%",
	padding: "0px 40px",
	//zIndex: 0,
	transition: "all 0.2s linear",

	[theme.breakpoints.only("xs")]: {
		padding: "0px 10px",
	},

	[theme.breakpoints.only("sm")]: {
		padding: "0px 25px",
	},

	[theme.breakpoints.only("sm")]: {
		padding: "0px 30px",
	},
}));

export const InvisibleAppBar = styled("div")(({}) => ({
	minHeight: APPBAR_HEIGHT,
	maxHeight: APPBAR_HEIGHT,
	height: APPBAR_HEIGHT,
	width: "100%",
	zIndex: 0,
}));

export const AppbarFullLogo = styled("img")(({ theme }) => ({
	width: 175,
	[theme.breakpoints.only("md")]: {
		width: 190,
	},

	[theme.breakpoints.only("sm")]: {
		width: 180,
	},

	[theme.breakpoints.only("xs")]: {
		width: 170,
	},
}));

export const AppbarSubcontainer = styled("div")(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	display: "flex",
	alignItems: "center",
	fontWeight: 400,
	gap: 5,
	position: "relative",
}));

export const UpperBarMenu = styled("div")(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 16,
	height: "100%",
	position: "absolute", // Posicionamiento absoluto
	left: "50%", // Centrado horizontal
	transform: "translateX(-50%)", // Ajuste para centrado perfecto
	// backgroundColor: "#fff", // Comentado para mantener el fondo transparente
}));

export const UpperBarMenuItem = styled("div")(({ theme }) => ({
	display: "flex",
	position: "relative",
	alignItems: "center",
	color: "#ffffffDD",
	fontWeight: 400,
	cursor: "pointer",
	textTransform: "uppercase",
	fontSize: 15,
	gap: 1,
	"&:hover": {
		color: "#29cf77",
		transition: "color 0.3s ease-in-out",
	},
	"&:not(:hover)": {
		color: "#ffffffDD",
		transition: "color 0.3s ease-in-out",
	},
}));

// =================================================================
export const XList = styled(List)(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	marginLeft: 15,
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	height: "fit-content",
	width: "100%",
}));
// =================================================================
export const XListItemButton = styled(ListItemButton)(({ theme }) => ({
	width: "100%",
	marginTop: 2,
	marginBottom: 2,
	width: "60%",
	color: "#000000cc",
	fontWeight: 700,
	display: "flex",
	justifyContent: "flex-start",
	//stextAlign: "right",
	borderTopLeftRadius: 5,
	borderBottomLeftRadius: 5,
	height: 38,
	":hover": {
		background: "#00000010",
	},
	"&.Mui-selected": {
		color: "#000",
		background: "#fff",
		":hover": {
			background: "#00000015",
		},
	},
}));
// =================================================================
export const SubListItemContainer = styled("div")(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	display: "flex",
	alignItems: "center",
	width: "fit-content",
	gap: 10,
	padding: 5,
	transition: "background 0.3s ease", // Añade la transición de fondo
	color: "#ffffff",
	"&:hover": {
		// Estilo para el hover
		color: "#29cf77",
		transition: "color 0.3s ease-in-out", //
	},
	borderRadius: 8,
}));

// =================================================================
export const SubListIconContainer = styled("div")(({ theme }) => ({
	//background: "#F0F1F2",
	//"linear-gradient(to right top, #4e54c860, #8f94fb60)",
	borderRadius: 5,
	display: "flex",
	padding: 5,
	alignItems: "center",
	justifyContent: "center",
	color: "inherit",
}));

// =================================================================
export const InternalSubListItemContainer = styled("div")(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	display: "flex",
	flexDirection: "column",
	lineHeight: 1.4,
	color: "inherit",
}));

// =================================================================
export const SubListItemName = styled("div")(({ theme }) => ({
	fontWeight: 600,
	fontSize: 13,
	color: "inherit",
}));

// =================================================================
export const SubListItemText = styled("div")(({ theme }) => ({
	color: "#fff",
	fontWeight: 300,
	fontSize: 12,
	width: "100%",
}));
