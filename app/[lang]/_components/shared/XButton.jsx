//@ts-nocheck
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonComponent = styled(Button)(
	({ theme, invisible, variant, borderradius, xsize, width, height, nopadding }) => ({
		fontFamily: theme.typography.fontFamily,
		fontWeight: 600,
		width: width ? width : "100%",
		textTransform: "initial",
		height: height ? height : theme.button.size[xsize].height,
		fontSize: theme.button.size[xsize].fontSize,
		borderRadius: borderradius ? theme.button.borderShapes[borderradius] : theme.consts.borderRadius,
		color: theme.button.color[variant].textColor,
		background: theme.button.color[variant].background,
		border: theme.button.color[variant].border,
		//zIndex: 0,
		minWidth: 40,

		...(nopadding
			? {
					padding: 0,
			  }
			: {
					padding: "2px 12px",
			  }),

		"&:hover": {
			backgroundColor: theme.button.color[variant].backgroundHover,
			border: theme.button.color[variant].border,
		},
		"&:disabled": {
			color: theme.button.color[variant].disabled,
			border: theme.button.color[variant].disabledBorder,
		},
		display: invisible && "none",
	})
);

/**
 * @param {object} props
 */
const XButton = ({
	action,
	message,
	variant,
	disabled,
	invisible,
	borderradius,
	xsize,
	width,
	height,
	href,
	target,
	component,
	soundCancel,
	semidisabled,
	nopadding,
}) => {
	return (
		<ButtonComponent
			component={component}
			href={href}
			target={target}
			xsize={xsize}
			variant={variant}
			nopadding={nopadding ? 1 : 0}
			invisible={invisible ? 1 : 0}
			onClick={(e) => {
				//semidisabled ? XDialog(16, () => {}) : action(e);
				//!soundCancel && sound("click");
			}}
			disabled={disabled}
			borderradius={borderradius}
			width={width}
			height={height}
		>
			{message}
		</ButtonComponent>
	);
};

export default XButton;
