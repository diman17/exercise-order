import { ALPHABET_RU, VALUES_SCALE } from "../constants";

const generateRandomLetter = (alphabet: string) => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const generateRandomInteger = (min: number, max: number) =>
    Math.floor(min + Math.random() * (max + 1 - min));

export const createItems = (quantity: string, values: string) => {
    const set = new Set<string>();
    
    while (set.size !== +quantity) {
        switch (values) {
            case VALUES_SCALE.A:
                set.add(generateRandomLetter(ALPHABET_RU));
                break;
            case VALUES_SCALE[9]:
                set.add(`${generateRandomInteger(1, +VALUES_SCALE[9])}`);
                break;
            case VALUES_SCALE[19]:
                set.add(`${generateRandomInteger(+VALUES_SCALE[9] + 1, +VALUES_SCALE[19])}`);
                break;
            case VALUES_SCALE[50]:
                set.add(`${generateRandomInteger(+VALUES_SCALE[19] + 1, +VALUES_SCALE[50])}`);
                break;
            case VALUES_SCALE[99]:
                set.add(`${generateRandomInteger(+VALUES_SCALE[50] + 1, +VALUES_SCALE[99])}`);
                break;
            case VALUES_SCALE[999]:
                set.add(`${generateRandomInteger(+VALUES_SCALE[99] + 1, +VALUES_SCALE[999])}`);
                break;
            default:
                break;
        }
    }
    return Array.from(set);
};
