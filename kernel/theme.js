"use client";
import { createTheme } from "@mui/material/styles";

const LIGHT = {
	MAIN_COLOR: "#0b121c",
};

const theme = createTheme({
	consts: {
		borderRadius: 10,
	},
	colors: {
		main: LIGHT.MAIN_COLOR,
	},
	typography: {
		fontFamily: "var(--font-global)",
	},
	button: {
		color: {
			main: {
				textColor: "#000",
				background: "#fff",
				backgroundHover: "#fffdd",
				border: "none",
				disabled: "#ffffff40",
			},
			maincolor: {
				textColor: "#16663b",
				background: "#29cf77",
				backgroundHover: "#29cf77dd",
				border: "1px solid #29cf77",
				disabled: "#29cf7740",
			},
			outlined: {
				textColor: "#ffffff",
				background: "transparent",
				backgroundHover: "#ffffff10",
				border: "1px solid #ffffffA0",
				disabled: "#ffffff40",
			},

			nobackground: {
				textColor: "#000000",
				background: "transparent",
				backgroundHover: "transparent",
				border: "none",
				disabled: "#ffffff40",
			},
		},
		size: {
			xs: {
				height: 32,
				fontSize: 13,
			},
			s: {
				height: 36,
				fontSize: 15,
			},
			m: {
				height: 40,
				fontSize: 15.5,
			},
			l: {
				height: 45,
				fontSize: 17,
			},
		},
		borderShapes: {
			halfborder: "0 0 7px 7px",
			halfrightborder: "0 0 7px 0",
			halfleftborder: "0 0 0 7px",
		},
	},
	textField: {
		color: {
			default: {
				textColor: "#000000A0",
				labelTextColor: "#AEAEAE",
				backgroundColor: "#FFFFFF",
				boxShadow: "2px 2px 15px -10px rgba(11,18,28, .1)",
			},
			notheme1: {
				textColor: "#000000",
				labelTextColor: "#AEAEAE",
				backgroundColor: "#f2f2f2", //#f2f2f2
				boxShadow: "2px 2px 15px -10px rgba(11,18,28, .1)",
				borderColor: "#00000005",
			},
		},
		size: {
			sInvoiceValue: {
				height: 36,
				fontSize: 15,
				labelFontSize: 14,
				fontWeight: 700,
				marginTop: -8,
			},
			xs: {
				height: 30,
				fontSize: 12,
				labelFontSize: 13,
				fontWeight: 400,
				marginTop: -12,
			},
			s: {
				height: 36,
				fontSize: 14,
				labelFontSize: 15.5,
				fontWeight: 400,
				marginTop: -8,
			},
			m: {
				height: 40,
				fontSize: 14,
				labelFontSize: 17,
				fontWeight: 400,
				marginTop: -5,
			},

			l: {
				height: 52,
				fontSize: 16,
				labelFontSize: 17,
				fontWeight: 400,
				marginTop: -5,
			},
		},
	},
});

export default theme;
