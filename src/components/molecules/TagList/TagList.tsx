import React, { FC } from 'react';
import { ISingleItem } from 'shared/interface/singleItem.interface';
import Tag from 'components/atoms/Tag/Tag';

interface ITagList {
    items: ISingleItem[];
}

const TagList: FC<ITagList> = ({ items }) => {
    return (
        <ul className="list-none m-0 p-0 flex flex-wrap w-full mb-6 -mx-3 -my-1.5">
            {items.map(({ label, value }) => (
                <Tag key={value} value={value} label={label} />
            ))}
        </ul>
    );
};

export default TagList;
