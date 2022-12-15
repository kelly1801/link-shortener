import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  
    :root {
      --Cyan: hsl(180, 66%, 49%);
      --Violet: hsl(257, 27%, 26%);
      --Red: hsl(0, 87%, 67%);
      --Gray: hsl(0, 0%, 75%);
      --Grayish_Violet: hsl(257, 7%, 63%);
      --Dark_Blue: hsl(255, 11%, 22%);
      --Dark_Violet: hsl(260, 8%, 14%);
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;
