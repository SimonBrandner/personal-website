import "../../scss/components/Header.scss";
import React from "react";
import HeaderItem from "./HeaderItem";
import ThemeSwitcher from "./ThemeSwitcher";
import { Routes } from "../Routes";
import { RouteComponentProps, withRouter } from "react-router-dom";

type IProps = RouteComponentProps;

class Header extends React.Component<IProps> {
	public componentDidMount(): void {
		this.onRouteChanged();
	}

	public componentDidUpdate(prevProps: IProps): void {
		if (prevProps.location !== this.props.location) {
			this.onRouteChanged();
		}
	}

	private onRouteChanged = (): void => {
		document.title = `${Routes.find((r) => r.path === this.props.location.pathname)?.label} | Šimon Brandner`;
	}

	public render(): JSX.Element {
		const headerItems = Routes.map((route) => {
			return (
				<HeaderItem key={route.path} path={route.path} label={route.label} />
			);
		});

		return (
			<div className="Header_wrapper">
				<div className="Header">
					<div className="Header_title">
						<div className="Header_name">
							Šimon Brander
						</div>
						<div className="Header_sub">
							A student and a programmer
						</div>
					</div>
					<div className="Header_menu">
						<div className="Header_menu_items">
							{ headerItems }
						</div>
						<div className="Header_menu_buttons">
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
