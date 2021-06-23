import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { primaryFont } from "./typography";
import { backgroundColor } from "./colors";

export const GlobalStyle = createGlobalStyle`
	${normalize()}
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *::before, *::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		font-family: ${primaryFont};
		background-color: ${backgroundColor};
	}

	main {
		width: 90%;
		margin: 0 auto;
	}
`;
