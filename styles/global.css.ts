export default `
@font-face {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Calibri.woff"), url("/fonts/Calibri.woff2");
}

@font-face {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/Calibri-Bold.woff"), url("/fonts/Calibri-Bold.woff2");
}

@font-face {
    font-family: "Circe Rounded";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/CirceRounded-Regular.woff"), url("/fonts/CirceRounded-Regular.woff2");
}

@font-face {
    font-family: "Circe Rounded Alt";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/CirceRoundedAlt-Regular2.woff"), url("/fonts/CirceRoundedAlt-Regular2.woff2");
}

@font-face {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/Helvetica-Bold.woff"), url("/fonts/Helvetica-Bold.woff2");
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;

    font-family: Calibri;
    line-height: 1.275;
    font-weight: 400;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}
`;
