import "../../scss/views/CV.scss";
import React from "react";
import { CVPart } from "../components/CVPart";
import { View } from "./View";
import { CVSection } from "../components/CVSection";

export const CV: React.FC = () => {
	return (
		<View className="CV">
			<React.Fragment>
				<CVSection name="General Skills">
					<CVPart
						name="Languages"
					>
						<ul>
							<li>English — C1</li>
							<li>Spanish — A2</li>
							<li>Czech — native speaker</li>

						</ul>
					</CVPart>
				</CVSection>
				<CVSection name="Programming and IT Skills">
					<CVPart
						name="General"
					>
						<ul>
							<li> Word processors: Google Docs, Microsoft Word, LibreOffice Writer </li>
							<li> Spreadsheet editors: Google Sheets, Microsoft Excel, LibreOffice Calc </li>
							<li> Presentation programs: Google Slides, Microsoft PowerPoint, LibreOffice Impress </li>
							<li> Raster graphics editors: GIMP, Krita, Affinity Photo </li>
							<li> Vector graphics editors: Inkscape, Figma </li>
							<li> Video editors: DaVinci Resolve </li>
							<li> Operating systems: Linux, Microsoft Windows </li>
						</ul>
					</CVPart>
					<CVPart
						name="Programming Languages"
					>
						<ul>
							<li> JavaScript/TypeScript — intermediate </li>
							<li> Python — intermediate </li>
							<li> Go — intermediate </li>
							<li> C++ — elementary </li>
						</ul>
					</CVPart>
					<CVPart
						name="Markup and Style Sheet Languages"
					>
						<ul>
							<li> LaTeX — intermediate </li>
							<li> Markdown — intermediate </li>
							<li> HTML — intermediate </li>
							<li> CSS/SCSS — intermediate </li>
							<li> QML — elementary </li>
						</ul>
					</CVPart>
					<CVPart
						name="Technologies"
					>
						<ul>
							<li> Web app frameworks/libraries: React, Angular </li>
							<li> Communication: Matrix, WebRTC </li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name="Work Experiences">
					<CVPart 
						name="Element Internship"
						from="May 2022"
					>
						<ul>
							<li> Working on Element Web/Desktop </li>
							<li> Working on Element Call </li>
							<li> Working on SFU-to-SFU </li>
							<li> Working on the Matrix specification </li>
							<li> Occasionally working on other related projects </li>
							<li> Working on the VoIP team </li>
							<li> Mentoring colleagues </li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name="Projects">
					<CVPart
						name="GitHub"
						from="January 2019"
					>
						<p>
							I have been contributing to open source projects
							on GitHub and putting my work there. See a list of all my&nbsp;
							<a 
								rel="noreferrer noopener" 
								href="https://github.com/search?q=is%3Apr+author%3ASimonBrandner"
							>
								pull requests
							</a> and my&nbsp;
							<a 
								rel="noreferrer noopener"
								href="https://github.com/SimonBrandner/"
							>
								profile
							</a>.
						</p>
					</CVPart>
					<CVPart
						name="Matrix"
						from="November 2020"
					>
						<ul>
							<li>
								Wrote&nbsp;
								<a
									href={
										"https://github.com/search?q=is%3Apr+author%3ASimonBrandner" + 
										"+label%3A%22voip%22+repo%3Amatrix-org%2Fmatrix-spec-proposals"
									}
									rel="noreferrer noopener"
								>
									MSCs to improve VoIP
								</a>

							</li>
							<li>
								Rewrote&nbsp;
								<a 
									href="https://github.com/matrix-org/matrix-spec-proposals/pull/2285" 
									rel="noreferrer noopener"
								>
									MSC2285: Private read receipts
								</a>
							</li>
							<li>
								Wrote&nbsp;
								<a 
									href="https://github.com/matrix-org/matrix-spec-proposals/pull/3827"
									rel="noreferrer noopener"
								>
									MSC3827: Filtering of <code>/publicRooms</code> by room type
								</a>
							</li>
							<li>
								Wrote&nbsp;
								<a
									href="https://github.com/matrix-org/matrix-spec-proposals/pull/3786"
									rel="noreferrer noopener"
								>
									MSC3786: Add a default push rule to ignore <code>m.room.server_acl</code> events
								</a>
							</li>
						</ul>
					</CVPart>
					<CVPart
						name="Element Web/Desktop"
						from="November 2020"
					>
						<ul>
							<li> Rewrote parts of the VoIP stack, so that they are more flexible </li>
							<li> Implemented new VoIP features </li>
							<li> Added numerous features </li>
							<li> Fixed numerous bugs </li>
						</ul>
					</CVPart>
					<CVPart
						name="SFU-to-SFU"
						from="August 2022"
					>
						<ul>
							<li> Worked on getting the SFU to connect to Matrix clients </li>
							<li> Implemented numerous features </li>
						</ul>
					</CVPart>
					<CVPart
						name="Synapse"
						from="July 2021"
					>
						<ul>
							<li> Implemented MSC2285: Private read receipts </li>
							<li> Implemented MSC3827: Filtering of <code>/publicRooms</code> by room type </li>
						</ul>
					</CVPart>
					<CVPart
						name="i3-pager"
						from="October 2020"
						to="November 2020"
					>
						<ul>
							<li> Rewrote a part of the widget for better extensibility </li>
							<li> Added several new features </li>
						</ul>
					</CVPart>
					<CVPart
						name="TaskizerDesktop"
						from="March 2020"
						to="August 2020"
					>
						<p>
							Taskizer aimed to be a free and open source task-management app with many features.
							From the perspective of today, the code is probably awful. Some if its features were:
						</p>
						<ul>
							<li> Nested tasks </li>
							<li> Scheduling </li>
							<li> Project importing </li>
							<li> System tray icon </li>
							<li> Keyboard shortcuts </li>
							<li> Repeated tasks </li>
							<li> Repeat presets </li>
							<li> Multiple themes </li>
							<li> Reminders </li>
						</ul>
					</CVPart>
					<CVPart
						name="YeelightCPPAPI"
						from="June 2019"
						to="June 2020"
					>
						<p> The Yeelight C++ API is a library for controlling Yeelight bulbs using C++. </p>
					</CVPart>
				</CVSection>
				<CVSection name="Other">
					<CVPart
						name="dotfiles"
					>
						<p> dotfiles is a repo containing my configuration files as well as info about my setup.</p>
					</CVPart>
				</CVSection>
			</React.Fragment>
		</View>
	);
};
