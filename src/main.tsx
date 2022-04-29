import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./code/App";
import { ThemeStore } from "./code/stores/ThemeStore";
import * as i18nUtils from "./code/utils/i18nUtils";

i18nUtils.initialize();
ThemeStore.instance.initialize();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
