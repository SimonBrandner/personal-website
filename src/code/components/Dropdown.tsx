import classNames from "classnames";
import React, { useState } from "react";
import "../../scss/components/Dropdown.scss";

interface IDropdownOptionProps {
	label: string;
	selected?: boolean;
	onSelected: () => void;
}

const DropdownOption: React.FC<IDropdownOptionProps> = ({ label, selected, onSelected }) => {
	const className = classNames("Dropdown_option", {
		"Dropdown_option_selected": selected,
	});

	return (
		<div className={className} onClick={onSelected}>
			{ label }
		</div>
	);
};

interface IProps {
	defaultValue: string;
	options: {[key: string]: string};
	onValueChange: (value: string) => void;
}

export const Dropdown: React.FC<IProps> = ({ defaultValue, options, onValueChange }) => {
	const [currentValue, setCurrentValue] = useState<string>(defaultValue);

	const onOptionSelected = (value: string): void => {
		setCurrentValue(value);
		onValueChange(value);
	};

	return (
		<div className="Dropdown">
			<div> { options[currentValue] } </div>
			<div className="Dropdown_options">
				{ Object.entries(options).map(([key, value]) => (
					<DropdownOption
						key={key}
						selected={key === currentValue}
						onSelected={() => onOptionSelected(key)}
						label={value}
					/>
				)) }
			</div>
		</div>
	);
};
