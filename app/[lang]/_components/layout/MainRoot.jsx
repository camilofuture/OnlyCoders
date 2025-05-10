"use client";

import { APPBAR_HEIGHT, MAIN_TIMEOUT } from "@/kernel/constants";
import React, { useEffect, useState, useMemo } from "react";
import {
	AppbarFullLogo,
	AppbarSubcontainer,
	InternalSubListItemContainer,
	InvisibleAppBar,
	LayoutAppBar,
	SubListIconContainer,
	SubListItemContainer,
	SubListItemName,
	SubListItemText,
} from "../styledComponents";
import XButton from "../shared/XButton";
import { Fade } from "@mui/material";
import { PiStarFourFill, PiBrainFill, PiFadersFill, PiFediverseLogoFill, PiUserLight } from "react-icons/pi";
import UpperMenu from "./UpperMenu";
import logo from "../../../../public/images/onlycoders_logo4.webp";
import { useTranslation } from "../../../../hooks/useTranslation";
import { FaPlay } from "react-icons/fa6";
import Footer from "./Footer";
import GlitchText from "../shared/GlitchText";

const MainRoot = ({ children }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [listkey, setListkey] = useState(null); //1101
	const [menukey, setMenukey] = useState(null); //1100
	const [visible, setVisible] = useState(false); // Controla la visibilidad del componente
	const { t } = useTranslation();

	useEffect(() => {
		setVisible(false);
		setTimeout(() => {
			setVisible(true);
		}, 1);
	}, [listkey, menukey]);

	// Crear el objeto menus usando useMemo para que se actualice cuando cambie el idioma
	const menus = useMemo(() => {
		return {
			m1100: {
				key: 1100,
				name: t("menu.m1100"),
				isActivated: true,
				hasSubMenu: false,
				goto: "/metadex",
			},
			m1200: {
				key: 1200,
				name: t("menu.m1200"),
				isActivated: true,
				hasSubMenu: false,
				goto: "/pricing",
			},
			m1300: {
				key: 1300,
				name: t("menu.m1300"),
				isActivated: true,
				hasSubMenu: true,
				subMenu: [
					{
						key: 130101,
						icon: PiStarFourFill,
						name: t("menu.m130101"),
						text: t("menu.m130101_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
					{
						key: 130102,
						icon: PiBrainFill,
						name: t("menu.m130102"),
						text: t("menu.m130102_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
				],
			},
			m1400: {
				key: 1400,
				name: t("menu.m1400"),
				isActivated: true,
				hasSubMenu: true,
				subMenu: [
					{
						key: 140101,
						icon: PiStarFourFill,
						name: t("menu.m140101"),
						text: t("menu.m140101_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
					{
						key: 140102,
						icon: PiBrainFill,
						name: t("menu.m140102"),
						text: t("menu.m140102_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
					{
						key: 140103,
						icon: PiFadersFill,
						name: t("menu.m140103"),
						text: t("menu.m140103_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
					{
						key: 140201,
						icon: PiFadersFill,
						name: t("menu.m140201"),
						text: t("menu.m140201_text"),
						isActivated: true,
						to: "/proyectos",
						id: "reinnventatebolivar",
					},
				],
			},
			m1500: {
				key: 1500,
				name: t("menu.m1500"),
				isActivated: true,
				hasSubMenu: false,
				goto: "/company",
			},
		};
	}, [t]);

	const handleMenu = (key) => {
		setMenukey(key);
		if (!openDrawer) setOpenDrawer(true);
	};

	const handleList = (key) => {
		setListkey(key);
	};

	const handleClose = () => {
		setOpenDrawer(false);

		setTimeout(() => {
			setMenukey(null);
			setListkey(null);
		}, 150);
	};

	const [menuPosition, setMenuPosition] = useState(0);

	const handleMenuHover = (localmenukey, menuElement) => {
		// Set the menu key and open the drawer
		handleMenu(localmenukey);
		setOpenDrawer(true);

		// Calculate the menu position based on the menu item's position
		if (menuElement) {
			const rect = menuElement.getBoundingClientRect();
			const menuCenter = rect.left + rect.width / 2;
			setMenuPosition(menuCenter);
		}
	};

	// Handle mouse leaving the menu area
	const handleMenuLeave = () => {
		// Close immediately when leaving the menu area
		handleClose();
	};

	// Add event listeners for mouse movement
	useEffect(() => {
		const menuArea = document.querySelector(".menu-area");
		if (menuArea) {
			menuArea.addEventListener("mouseleave", handleMenuLeave);
			return () => {
				menuArea.removeEventListener("mouseleave", handleMenuLeave);
			};
		}
	}, [openDrawer]);

	return (
		<Fade in timeout={MAIN_TIMEOUT}>
			<div style={{ minHeight: "100svh", position: "relative" }}>
				<LayoutAppBar elevation={0} position="fixed">
					{/* Contenedor izquierdo */}
					<AppbarSubcontainer style={{ position: "relative", zIndex: 2 }}>
						<AppbarFullLogo src={logo.src} alt="Full" />
					</AppbarSubcontainer>

					{/* Menú central - ahora con posicionamiento absoluto desde CSS */}
					<div className="menu-area">
						<UpperMenu
							menus={menus}
							menukey={menukey}
							openDrawer={openDrawer}
							handleMenuHover={handleMenuHover}
							handleList={handleList}
							setOpenDrawer={setOpenDrawer}
						/>

						{menukey !== null && visible && menus[`m${menukey}`].hasSubMenu && (
							<div
								style={{
									position: "absolute",
									top: APPBAR_HEIGHT,
									left: menuPosition,
									transform: "translateX(-50%)",
									width: "auto",
									//maxWidth: "20%",
									backgroundColor: "#0C0C0C",
									border: "1px solid #ffffff20",
									borderRadius: "10px",
									boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
									zIndex: 200,
									padding: 10,
									display: openDrawer ? "block" : "none",
									animation: openDrawer ? "swipeUp 0.3s forwards" : "none",
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
									}}
								>
									{menus[`m${menukey}`].subMenu.map((submenu) => (
										<div
											key={submenu.key}
											style={{
												width: "fit-content",
												cursor: "pointer",
											}}
										>
											<SubListItemContainer>
												<SubListIconContainer>
													<submenu.icon size={40} color="#29cf77" />
												</SubListIconContainer>
												<InternalSubListItemContainer>
													<SubListItemName>{submenu.name}</SubListItemName>
													<SubListItemText>{submenu.text}</SubListItemText>
												</InternalSubListItemContainer>
											</SubListItemContainer>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Contenedor derecho */}
					<AppbarSubcontainer style={{ position: "relative", zIndex: 2, marginLeft: "auto", gap: 10 }}>
						<XButton
							width="fit-content"
							variant="outlined"
							disabled={false}
							xsize="m"
							action={() => {}}
							href="http://192.168.20.42:3000"
							target="_blank"
							//nopadding
							message={<PiUserLight size={22} />}
						/>

						<XButton
							width="fit-content"
							variant="main"
							disabled={false}
							xsize="m"
							action={() => {}}
							message={
								<div style={{ display: "flex", alignItems: "center", gap: 5 }}>
									<GlitchText
										style={{
											display: "flex",
											alignItems: "center",
											gap: 5,
											fontSize: 18,
											fontWeight: "bold",
											width: 75,
										}}
									>
										<FaPlay size={15} /> {t("appbar.btn1")}
									</GlitchText>
								</div>
							}
						/>
					</AppbarSubcontainer>
				</LayoutAppBar>

				<InvisibleAppBar />

				<main
					style={{
						minHeight: `calc(100svh - ${APPBAR_HEIGHT}px)`,
					}}
				>
					{children}
				</main>
			</div>
		</Fade>
	);
};

export default MainRoot;

/* 
	<div
					style={{
						fontFamily: "var(--font-logo)",
						fontSize: 24,
						marginTop: 25,
						marginLeft: 35,
						display: "flex",
						alignItems: "center",
						gap: 10,
					}}
				>
					<GiMoebiusTriangle size={28} color="#fff" />
					<div>ONLYCODERS</div>
				</div>
*/
