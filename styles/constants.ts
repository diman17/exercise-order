export const COLORS = {
    white: "#ffffff",
    cornflowerBlue: "#6195ed",
    brightSun: "#ffd748",
    chathamsBlue: "#104987",
    shipGray: "#423f45",
    cameo: "#dec6aa",
    lividBrown: "#3a1f36",
    bigStone: "#132738",
    outerSpace: "#2d3539",
    wildSand: "#f5f5f5",
};

export const EXERCISE_BACKGROUNDS = [
    `
    background-color: ${COLORS.cameo};
    background-image: url('themes/1/bg-cake.svg'), url('themes/1/bg-cake.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: -190px -80px,730px -290px;
    `,
    `
    background-color: ${COLORS.lividBrown};
    background-image: url('themes/2/bg-coin-1.svg'), url('themes/2/bg-coin-2.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: -140px 5px,790px -20px;
    `,
    `
    background-color: ${COLORS.bigStone};
    background-image: url('themes/3/bg-tree.svg'), url('themes/3/bg-tree.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: -210px 160px, 570px 160px;
    
    &::before,
    &::after {
        content: "";

        position: absolute;
        top: 15px;

        width: 987px;
        height: 240px;

        background-image: url('themes/3/bg-garland.svg');
        background-repeat: no-repeat;
        background-position: 0 0;
    }
    &::before {
        left: -440px;

        transform: rotate(-15deg);
    }

    &::after {
        right: -490px;

        transform: rotate(15deg) scaleX(1);
    }
    `,
    `
    background-color: ${COLORS.outerSpace};
    
    &::before,
    &::after {
        content: "";

        position: absolute;
        top: -200px;

        width: 637px;
        height: 1292px;

        background-image: url('themes/4/bg-leafs.svg');
        background-repeat: no-repeat;
        background-position: 0 0;
    }
    &::before {
        left: -330px;

        transform: scaleX(-1);
    }

    &::after {
        right: -300px;
    }
    `,
];
