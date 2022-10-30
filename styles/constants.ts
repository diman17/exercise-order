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
    ebonyClay: "#242546",
};

export const EXERCISE_THEMES = [
    {
        itemImages: [
            "/themes/1/cake-1.svg",
            "/themes/1/cake-2.svg",
            "/themes/1/cake-3.svg",
            "/themes/1/cake-4.svg",
        ],
        board: "/themes/1/board.svg",
        background: `
                    background-color: ${COLORS.cameo};
                    background-image: url('themes/1/bg-cake.svg'), url('themes/1/bg-cake.svg');
                    background-repeat: no-repeat, no-repeat;
                    background-position: -190px -80px,730px -290px;
                    `,
    },
    {
        itemImages: ["/themes/2/coin-1.svg", "/themes/2/coin-2.svg", "/themes/2/coin-3.svg"],
        board: "/themes/2/board.svg",
        background: `
                    background-color: ${COLORS.lividBrown};
                    background-image: url('themes/2/bg-coin-1.svg'), url('themes/2/bg-coin-2.svg');
                    background-repeat: no-repeat, no-repeat;
                    background-position: -140px 5px,790px -20px;
                    `,
    },
    {
        itemImages: [
            "/themes/3/toy-1.svg",
            "/themes/3/toy-2.svg",
            "/themes/3/toy-3.svg",
            "/themes/3/toy-4.svg",
        ],
        board: "/themes/3/board.svg",
        background: `
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
    },
    {
        itemImages: ["/themes/4/flower-1.svg", "/themes/4/flower-2.svg", "/themes/4/flower-3.svg"],
        board: "/themes/4/board.svg",
        background: `
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
    },
];

const defaultLayout = {
    "2": `
        margin-top: 167px;

        & > li:nth-of-type(1) {
            left: -10px;
        }

        & > li:nth-of-type(2) {
            left: 10px;
        }
        `,
    "3": `
        margin-top: 133px;

        & > li:nth-of-type(1) {
            top: 90px;
            left: -20px;
        }

        & > li:nth-of-type(2) {
            top: -10px;
            left: 10px;
        }

        & > li:nth-of-type(3) {
            top: 90px;
            left: 20px;
        }
        `,
    "4": `
        margin-top: 133px;

        & > li:nth-of-type(1) {
            top: 90px;
            left: -20px;
        }

        & > li:nth-of-type(2) {
            top: -10px;
            left: 0;
        }

        & > li:nth-of-type(3) {
            top: 90px;
            left: 10px;
        }

        & > li:nth-of-type(4) {
            top: -10px;
            left: 20px;
        }
        `,
    "5": `
        margin-top: 133px;

        & > li:nth-of-type(1) {
            top: 90px;
            left: 10px;
        }

        & > li:nth-of-type(2) {
            top: -5px;
            left: 25px;
        }

        & > li:nth-of-type(3) {
            top: 135px;
            left: -15px;
        }

        & > li:nth-of-type(4) {
            top: -10px;
            left: -35px;
        }

        & > li:nth-of-type(5) {
            top: 90px;
            left:-30px;
        }
        `,
};

const flowerLayout = {
    "2": `
        margin-top: 167px;

        & > li::before {
            content: "";

            position: absolute;

            width: 140px;
            height: 550px;

            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

        & > li:nth-of-type(1) {
            left: -10px;
            transform: rotate(-15deg);
        }

        & > li:nth-of-type(1)::before {
            top: 135px;
            left: -15px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(13deg);
        }

        & > li:nth-of-type(2) {
            left: 10px;
            transform: rotate(15deg);
        }

        & > li:nth-of-type(2)::before {
            top: 135px;
            left: 80px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(-15deg) scaleX(-1);
        }
        `,
    "3": `
        margin-top: 133px;

        & > li::before {
            content: "";

            position: absolute;

            width: 140px;
            height: 550px;

            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

        & > li:nth-of-type(1) {
            top: 90px;
            left: -20px;
            transform: rotate(-15deg);
        }

        & > li:nth-of-type(1)::before {
            top: 135px;
            left: -15px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(13deg);
        }

        & > li:nth-of-type(2) {
            top: 0;
            left: 10px;
            transform: rotate(-5deg);
        }

        & > li:nth-of-type(2)::before {
            top: 140px;
            left: 0;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(10deg);
        }

        & > li:nth-of-type(3) {
            top: 90px;
            left: 20px;
            transform: rotate(15deg);
        }

        & > li:nth-of-type(3)::before {
            top: 135px;
            left: 65px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(-15deg) scaleX(-1);
        }
        `,
    "4": `
        margin-top: 133px;

        & > li::before {
            content: "";

            position: absolute;

            width: 140px;
            height: 550px;

            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

        & > li:nth-of-type(1) {
            top: 90px;
            left: -20px;
            transform: rotate(-15deg);
        }

        & > li:nth-of-type(1)::before {
            top: 135px;
            left: -15px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(13deg);
        }

        & > li:nth-of-type(2) {
            top: 0;
            left: 10px;
            transform: rotate(-5deg);
        }

        & > li:nth-of-type(2)::before {
            top: 140px;
            left: 0;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(10deg);
        }

        & > li:nth-of-type(3) {
            top: 90px;
            left: 20px;
            transform: rotate(15deg);
        }

        & > li:nth-of-type(3)::before {
            top: 135px;
            left: 65px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(-15deg) scaleX(-1);
        }

        & > li:nth-of-type(4) {
            top: 15px;
            left: 20px;
            transform: rotate(20deg);
        }

        & > li:nth-of-type(4)::before {
            top: 135px;
            left: 80px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(-15deg) scaleX(-1);
        }
        `,
    "5": `
        margin-top: 133px;

        & > li::before {
            content: "";

            position: absolute;

            width: 140px;
            height: 550px;

            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

        & > li:nth-of-type(1) {
            top: 90px;
            left: 10px;
            transform: rotate(-20deg)
        }

        & > li:nth-of-type(1)::before {
            top: 110px;
            left: -15px;

            background-image: url('/themes/4/stalk-2.svg');

            transform: rotate(22deg);
        }

        & > li:nth-of-type(2) {
            top: 0;
            left: 25px;
            transform: rotate(-10deg);
        }

        & > li:nth-of-type(2)::before {
            top: 140px;
            left: 0;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(10deg);
        }

        & > li:nth-of-type(3) {
            top: 145px;
            left: -15px;
            transform: rotate(-5deg);
        }

        & > li:nth-of-type(3)::before {
            top: 65px;
            left: 10px;

            background-image: url('/themes/4/stalk-3.svg');

            transform: rotate(10deg);
        }

        & > li:nth-of-type(4) {
            top: 20px;
            left: -25px;
            transform: rotate(20deg);
        }

        & > li:nth-of-type(4)::before {
            top: 140px;
            left: 80px;

            background-image: url('/themes/4/stalk-1.svg');

            transform: rotate(-17deg) scaleX(-1);
        }

        & > li:nth-of-type(5) {
            top: 110px;
            left: -60px;
            transform: rotate(20deg)
        }

        & > li:nth-of-type(5)::before {
            top: 115px;
            left: 50px;

            background-image: url('/themes/4/stalk-2.svg');

            transform: rotate(-20deg) scaleX(-1);
        }
        `,
};

export const ITEMS_LIST_LAYOUT = (theme: number) => {
    switch (theme) {
        case 0:
        case 1:
        case 2:
            return defaultLayout;
        case 3:
            return flowerLayout;
        default:
            return defaultLayout;
    }
};
