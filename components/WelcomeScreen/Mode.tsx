import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Fieldset } from "./elements/Fieldset";
import { InputRadio } from "./elements/InputRadio";

type ModeProps = {
    setMode: Dispatch<SetStateAction<string>>;
};

const Mode = ({ setMode }: ModeProps) => {
    const onModeChange = (event: ChangeEvent<unknown>) => {
        const target = event.target as HTMLInputElement;
        setMode(target.value);
    };

    return (
        <Fieldset onChange={onModeChange}>
            <legend className="visually-hidden">Mode</legend>
            <InputRadio type="radio" id="asc" name="mode" value="asc" defaultChecked />
            <label htmlFor="asc">По возрастанию</label>
            <InputRadio type="radio" id="desc" name="mode" value="desc" />
            <label htmlFor="desc">По убыванию</label>
        </Fieldset>
    );
};

export default Mode;
