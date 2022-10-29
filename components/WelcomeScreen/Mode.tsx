import { Fieldset } from "./elements/Fieldset";
import { InputRadio } from "./elements/InputRadio";

const Mode = () => {
    return (
        <Fieldset>
            <legend className="visually-hidden">Mode</legend>
            <InputRadio type="radio" id="asc" name="mode" value="asc" defaultChecked />
            <label htmlFor="asc">По возрастанию</label>
            <InputRadio type="radio" id="desc" name="mode" value="desc" />
            <label htmlFor="desc">По убыванию</label>
        </Fieldset>
    );
};

export default Mode;
