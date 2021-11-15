import React, { ChangeEvent, FC } from 'react';
import { ISingleItem } from 'shared/interface/singleItem.interface';
import { locales } from 'locales/en';
import { SelectStyled } from './Select.styled';

interface ISelect {
    items: ISingleItem[];
    name: string;
    onChange(e: ChangeEvent): void;
    value: string;
}

const Select: FC<ISelect> = ({ name, onChange, value, items }) => {
    return (
        <SelectStyled name={name} onChange={(e) => onChange(e)} value={value}>
            <option value="">{locales.label.defaultValue}</option>
            {items.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </SelectStyled>
    );
};

export default Select;
