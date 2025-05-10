"use client";

import React from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import { useTranslation } from "../../../../hooks/useTranslation";

/**
 * Footer component for the application
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
	const { t } = useTranslation();

	const footerSections = [
		{
			title: "Product",
			links: [
				{ name: "Pricing", url: "/pricing" },
				{ name: "Features", url: "/features" },
				{ name: "Enterprise", url: "/enterprise" },
				{ name: "Downloads", url: "/downloads" },
				{ name: "Students", url: "/students" },
			],
		},
		{
			title: "Resources",
			links: [
				{ name: "Docs", url: "/docs" },
				{ name: "Blog", url: "/blog" },
				{ name: "Forum", url: "/forum" },
				{ name: "Changelog", url: "/changelog" },
			],
		},
		{
			title: "Company",
			links: [
				{ name: "OnlyCoders", url: "/about" },
				{ name: "Careers", url: "/careers" },
				{ name: "Community", url: "/community" },
			],
		},
		{
			title: "Legal",
			links: [
				{ name: "Terms", url: "/terms" },
				{ name: "Security", url: "/security" },
				{ name: "Privacy", url: "/privacy" },
			],
		},
	];

	const handleLinkClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<Box
			component="footer"
			sx={{
				minHeight: "50svh",
				backgroundColor: "#000",
				color: "#fff",
				padding: { xs: "40px 20px", md: "60px 40px" },
				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
				overflow: "hidden",
				boxSizing: "border-box",
			}}
		>
			<Box sx={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
				<Grid container spacing={4}>
					{/* Company info and contact */}
					<Grid size={{ xs: 12, md: 4 }} sx={{ mb: 4 }}>
						<Typography
							variant="h6"
							sx={{
								fontFamily: "var(--font-logo)",
								fontSize: "1.5rem",
								mb: 2,
							}}
						>
							OnlyCoders
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: "rgba(255, 255, 255, 0.7)",
								mb: 2,
							}}
						>
							hi@onlycoders.com
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: "rgba(255, 255, 255, 0.5)",
								mb: 1,
							}}
						>
							© 2025 Made by
						</Typography>

						<Typography
							variant="body1"
							sx={{
								fontWeight: 500,
								mb: 3,
							}}
						>
							OnlyCoders Team
						</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
							}}
						>
							<Box
								component="img"
								src="/images/soc2.svg"
								alt="SOC 2 Certified"
								sx={{
									height: 20,
									filter: "brightness(0) invert(1)",
									opacity: 0.7,
								}}
							/>
							<Typography
								variant="caption"
								sx={{
									color: "rgba(255, 255, 255, 0.7)",
								}}
							>
								SOC 2 Certified
							</Typography>
						</Box>
					</Grid>

					{/* Footer sections */}
					{footerSections.map((section) => (
						<Grid key={section.title} size={{ xs: 6, sm: 3, md: 2 }}>
							<Typography
								variant="subtitle2"
								sx={{
									fontWeight: 600,
									mb: 2,
								}}
							>
								{section.title}
							</Typography>

							{section.links.map((link) => (
								<Typography
									key={link.name}
									variant="body2"
									component="div"
									sx={{
										mb: 1.5,
									}}
								>
									<Link
										sx={{
											color: "rgba(255, 255, 255, 0.7)",
											textDecoration: "none",
											"&:hover": {
												color: "#fff",
												textDecoration: "none",
											},
											cursor: "pointer",
											transition: "color 0.2s ease",
										}}
										onClick={() => handleLinkClick(link.url)}
									>
										{link.name}
									</Link>
								</Typography>
							))}
						</Grid>
					))}

					{/* Language selector */}
					<Grid size={{ xs: 12 }} sx={{ mt: 6, display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								color: "rgba(255, 255, 255, 0.7)",
								cursor: "pointer",
								"&:hover": {
									color: "#fff",
								},
								transition: "color 0.2s ease",
							}}
						>
							<Typography variant="body2">English</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Footer;
