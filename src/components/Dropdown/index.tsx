import React from "react";
import RNPickerSelect from "react-native-picker-select";

interface Props {
	options: string[];
	onSelected: (value: string) => void;
}

const Dropdown: React.FC<Props> = ({ options, onSelected }) => {
	return (
		<RNPickerSelect
			onValueChange={value => onSelected(value)}
			items={options.map(value => ({
				label: value,
				value,
			}))}
		/>
	);
};

export default Dropdown;
