import "../../scss/views/CV.scss";
import React from "react";
import { CVPart } from "../components/CVPart";
import { View } from "./View";
import { CVSection } from "../components/CVSection";

const GENERAL_LANGUAGES = `
+ English — C1
+ Spanish — A2
+ Czech — native speaker
`;

const IT_GENERAL = `
+ Word processors: Google Docs, Microsoft Word, LibreOffice Writer
+ Spreadsheet editors: Google Sheets, Microsoft Excel, LibreOffice Calc
+ Presentation programs: Google Slides, Microsoft PowerPoint, LibreOffice Impress
+ Raster graphics editors: GIMP, Krita, Affinity Photo
+ Vector graphics editors: Inkscape, Figma
+ Video editors: DaVinci Resolve
+ Operating systems: Linux, Microsoft Windows
`;

const IT_PROGRAMMING_LANGUAGES = `
+ JavaScript/TypeScript — intermediate
+ Python — intermediate
+ C++ — elementary
+ Go — elementary
`;

const IT_MARKUP_LANGUAGES = `
+ LaTeX — intermediate
+ Markdown — intermediate
+ HTML — intermediate
+ CSS/SCSS — intermediate
+ QML — elementary
`;

const IT_TECHNOLOGIES = `
+ Web app frameworks/libraries: React, Angular
+ Communication: Matrix, WebRTC
`;

const GENERAL_GITHUB = `
I've been contributing to open source projects
on GitHub and putting my work there. See a list of all my
[pull requests](https://github.com/search?q=is%3Apr+author%3ASimonBrandner)
and my [profile](https://github.com/SimonBrandner/).
`;

const EXPERIENCES_ELEMENT_INTERNSHIP = `
Working on Element Web, Matrix and occasionally different related projects.
`;

const PROJECTS_MATRIX = `
+ Wrote MSCs to improve VoIP
+ Rewrote MSC2285: hidden read receipts
`;

const PROJECTS_ELEMENT = `
+ Rewrote parts of the VoIP stack, so that they are more flexible
+ Implemented new VoIP features
+ Added numerous features
+ Fixed numerous bugs
`;

const PROJECTS_SYNAPSE = `
+ Implemented MSC2285: Hidden read receipts
`;

const PROJECTS_I3_PAGER = `
+ Rewrote part of the widget for better extensibility
+ Added several new features
`;

const PROJECTS_TASKIZER = `
Taskizer aimed to be a free and open source task-management app with many features. 
From the perspective of today, the code is probably awful. Some if its features were:
+ Nested tasks
+ Scheduling
+ Project importing
+ System tray icon
+ Keyboard shortcuts
+ Repeated tasks
+ Repeat presets
+ Multiple themes
+ Reminders
`;

const PROJECTS_YEELIGHT_CPPAPI = `
The Yeelight C++ API is a library for controlling Yeelight bulbs using C++.
`;

const GENERAL_DOTFILES = `
dotfiles is a repo containing my configuration files as well as info about my setup.
`;

export const CV: React.FC = () => {
	return (
		<View className="CV">
			<React.Fragment>
				<CVSection name="General Skills">
					<CVPart
						name="Languages"
						content={GENERAL_LANGUAGES}
					/>
				</CVSection>
				<CVSection name="Programming and IT Skills">
					<CVPart
						name="General"
						content={IT_GENERAL}
					/>
					<CVPart
						name="Programming Languages"
						content={IT_PROGRAMMING_LANGUAGES}
					/>
					<CVPart
						name="Markup and Style Sheet Languages"
						content={IT_MARKUP_LANGUAGES}
					/>
					<CVPart
						name="Technologies"
						content={IT_TECHNOLOGIES}
					/>
				</CVSection>
				<CVSection name="Work Experiences">
					<CVPart 
						name="Element Internship"
						from="May 2022"
						content={EXPERIENCES_ELEMENT_INTERNSHIP}
					/>
				</CVSection>
				<CVSection name="Projects">
					<CVPart
						name="GitHub"
						from="January 2019"
						content={GENERAL_GITHUB}
					/>
					<CVPart
						name="Matrix"
						from="November 2020"
						content={PROJECTS_MATRIX}
					/>
					<CVPart
						name="Element Web/Desktop"
						from="November 2020"
						content={PROJECTS_ELEMENT}
					/>
					<CVPart
						name="Synapse"
						from="July 2021"
						content={PROJECTS_SYNAPSE}
					/>
					<CVPart
						name="i3-pager"
						from="October 2020"
						to="November 2020"
						content={PROJECTS_I3_PAGER}
					/>
					<CVPart
						name="TaskizerDesktop"
						from="March 2020"
						to="August 2020"
						content={PROJECTS_TASKIZER}
					/>
					<CVPart
						name="YeelightCPPAPI"
						from="June 2019"
						to="June 2020"
						content={PROJECTS_YEELIGHT_CPPAPI}
					/>
				</CVSection>
				<CVSection name="Other">
					<CVPart
						name="dotfiles"
						content={GENERAL_DOTFILES}
					/>
				</CVSection>
			</React.Fragment>
		</View>
	);
};
