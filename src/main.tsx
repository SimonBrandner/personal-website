import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./code/App";
import ThemeStore from "./code/stores/ThemeStore";

ThemeStore.instance.initialize();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
