'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface SelectFilterProps {
    selectValue: string;
    selectItem: Array<string>;
    onSelectChange: (value: string) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
    selectValue,
    selectItem,
    onSelectChange,
}) => {
   
    return (
        <div className='mt-[20px]'>
            <p className='font-semibold pb-[2px]'>{selectValue}</p>
            <Select onValueChange={onSelectChange}>
                <SelectTrigger className="w-3/4">
                    <SelectValue placeholder={selectValue} />
                </SelectTrigger>
                <SelectContent>
                    {selectItem.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectFilter;
