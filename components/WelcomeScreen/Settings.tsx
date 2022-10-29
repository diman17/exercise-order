import { Fieldset } from "./elements/Fieldset";
import { InputContainer } from "./elements/InputContainer";
import { InputRange } from "./elements/InputRange";
import { LabelRange } from "./elements/LabelRange";
import { Scale } from "./elements/Scale";

const Settings = () => {
    return (
        <Fieldset column>
            <legend className="visually-hidden">Settings</legend>
            <LabelRange htmlFor="quantity">Кол-во предметов</LabelRange>
            <InputContainer width="70%">
                <Scale>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </Scale>
                <InputRange
                    type="range"
                    id="quantity"
                    name="quantity"
                    min={2}
                    max={5}
                />
            </InputContainer>
            <LabelRange htmlFor="values">Значения</LabelRange>
            <InputContainer width="100%">
                <Scale left={15}>
                    <span>А</span>
                    <span>9</span>
                    <span>19</span>
                    <span>50</span>
                    <span>99</span>
                    <span>999</span>
                </Scale>
                <InputRange
                    type="range"
                    id="values"
                    name="values"
                    min={1}
                    max={6}
                />
            </InputContainer>
        </Fieldset>
    );
};

export default Settings;
