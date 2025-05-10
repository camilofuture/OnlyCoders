import { StyledTextField } from "./styled";

/**
 * @param {object} props
 */
const XTextField = ({
	value,
	setValue,
	label,
	required,
	disabled,
	align,
	adornment,
	endadornment,
	type,
	onKeyDown,

	error,
	helpertext,
	inputProps,
	multiline,
	rows,
	maxRows,
	minRows,
	width,
	fullWidth,
	hasinsidetextfield,
	xvariant,
	xsize,
	id,
	placeholder,
	datatype,
	onClick,
	cursor,
	downlabel,
}) => {
	return (
		<form style={{ width: width }} noValidate onSubmit={(e) => e.preventDefault()}>
			<StyledTextField
				placeholder={placeholder}
				id={id}
				name={id}
				xvariant={xvariant}
				xsize={xsize}
				type={type}
				disabled={disabled}
				label={label}
				align={align}
				fullWidth={fullWidth}
				width={"100%"}
				required={required}
				error={error}
				helperText={helpertext}
				value={value}
				multiline={multiline}
				onClick={onClick}
				onKeyDown={onKeyDown ? onKeyDown : () => {}}
				downlabel={downlabel}
				onChange={(e) => {
					if (onClick) {
						e.stopPropagation();
					} else if (setValue) {
						setValue(e);
					}
					//setValue ? setValue(e) : e.stopPropagation();
				}}
				variant="outlined"
				rows={rows}
				maxRows={maxRows}
				minRows={minRows}
				cursor={cursor}
				inputProps={{
					...inputProps,
					autoComplete: "off",
				}}
				InputLabelProps={{
					shrink: true,
				}}
				hasinsidetextfield={hasinsidetextfield}
				//insidetextfield={insidetextfield}
				//	InputLabelProps={{ shrink: true }}
				InputProps={{
					type: datatype,
					startAdornment: adornment,
					endAdornment: endadornment,
				}}
			/>
		</form>
	);
};

export default XTextField;
