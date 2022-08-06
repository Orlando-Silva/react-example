import { Dispatch, SetStateAction } from 'react';

export interface HomeInputProps {
    value: string
    valueSetter: Dispatch<SetStateAction<string>>
}
