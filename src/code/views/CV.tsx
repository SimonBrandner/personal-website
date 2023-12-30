import "../../scss/views/CV.scss";
import React from "react";
import { CVPart } from "../components/CVPart";
import { View } from "./View";
import { CVSection } from "../components/CVSection";
import { Trans, useTranslation } from "react-i18next";

export const CV: React.FC = () => {
	const { t } = useTranslation();

	return (
		<View className="CV">
			<React.Fragment>
				<CVSection name={t("cv.generalSkills", "General Skills")}>
					<CVPart name={t("cv.languages", "Languages")}>
						<ul>
							<li>
								<Trans i18nKey="cv.english">English — C1</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.spanish">Spanish — A2</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.czech">Czech — native speaker</Trans>
							</li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.programmingAndItSkills", "Programming and IT Skills")}>
					<CVPart name={t("cv.general", "General")}>
						<ul>
							<li>
								<Trans i18nKey="cv.wordProcessors">
									Word processors: Google Docs, Microsoft Word, LibreOffice Writer
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.spreadsheetEditors">
									Spreadsheet editors: Google Sheets, Microsoft Excel, LibreOffice Calc
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.presentationPrograms">
									Presentation programs: Google Slides, Microsoft PowerPoint, LibreOffice Impress
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.rasterGraphicsEditors">Raster graphics editors: GIMP, Krita, Affinity Photo</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.vectorGraphicsEditors">Vector graphics editors: Inkscape, Figma</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.videoEditors">Video editors: DaVinci Resolve</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.operatingSystems">Operating systems: Linux, Microsoft Windows</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name={t("cv.programmingLanguages", "Programming Languages")}>
						<ul>
							<li>
								JavaScript/TypeScript — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								Python — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								Go — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								C++ — <Trans i18nKey="cv.elementary">elementary</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name={t("cv.markupAndStyleSheetLanguages", "Markup and Style Sheet Languages")}>
						<ul>
							<li>
								LaTeX — <Trans i18nKey="cv.intermediate"> intermediate</Trans>
							</li>
							<li>
								Markdown — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								HTML — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								CSS/SCSS — <Trans i18nKey="cv.intermediate">intermediate</Trans>
							</li>
							<li>
								QML — <Trans i18nKey="cv.elementary">elementary</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name={t("cv.technologies", "Technologies")}>
						<ul>
							<li>
								<Trans i18nKey="cv.webAppFrameworks/libraries">Web app frameworks/libraries</Trans>: React, Angular
							</li>
							<li>
								<Trans i18nKey="cv.communication">Communication</Trans>: Matrix, WebRTC
							</li>
							<li>
								<Trans i18nKey="cv.gameEngines">Game engines</Trans>: Unreal Engine (Blueprints)
							</li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.workExperiences", "Work Experiences")}>
					<CVPart name={t("cv.elementInternship", "Element Internship")} from={t("cv.may", "May") + " 2022"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.workingOnElementWebDesktop">Working on Element Web/Desktop</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.workingOnElementCall">Working on Element Call</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.workingOnWaterfall">Working on Waterfall</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.workingOnSpec">Working on the Matrix specification</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.workingOnOtherRelatedProjects">Occasionally working on other related projects</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.workingOnTheVoipTeam">Working on the VoIP team</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.mentoring">Mentoring colleagues</Trans>
							</li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.theses", "Theses")}>
					<CVPart
						name={t("cv.highSchoolThesis", "The Usage of the Matrix Protocol for Video Calls")}
						from={t("cv.march", "March") + " 2023"}
					>
						<p>
							<Trans i18nKey="cv.highSchoolThesisDescription">
								I am writing my high-school graduation thesis about The Usage of the Matrix Protocol for Video Calls
								(Využití protokolu Matrix pro videohovory). The 
								<a
									rel="noreferrer noopener"
									// eslint-disable-next-line max-len
									href="https://github.com/SimonBrandner/RocnikovaPrace-MatrixRTC"
								>
									source code
								</a> 
								is hosted on GitHub and so is the 
								<a
									rel="noreferrer noopener"
									// eslint-disable-next-line max-len
									href="https://nightly.link/SimonBrandner/RocnikovaPrace-MatrixRTC/workflows/build.yaml/stable/matrixRTC.pdf.zip"
								>
									PDF
								</a>
								.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.projects", "Projects")}>
					<CVPart name="GitHub" from={t("cv.January", "January") + " 2019"}>
						<p>
							<Trans i18nKey="cv.github">
								I have been contributing to open source projects on GitHub and putting my work there. See a list of all
								my 
								<a rel="noreferrer noopener" href="https://github.com/search?q=is%3Apr+author%3ASimonBrandner">
									pull requests
								</a> 
								and 
								<a rel="noreferrer noopener" href="https://github.com/SimonBrandner/">
									my profile
								</a>
								.
							</Trans>
						</p>
					</CVPart>
					<CVPart name="Matrix" from={t("cv.november", "November") + " 2020"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.msc3401">
									Wrote parts of 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/3401" rel="noreferrer noopener">
										MSC3401: Native Group VoIP Signalling
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.msc3898">
									Wrote parts of 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/3898" rel="noreferrer noopener">
										MSC3898: Native Matrix VoIP signalling for cascaded foci (SFUs, MCUs...)
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.mscOthers">
									Wrote 
									<a
										href={
											"https://github.com/search?q=is%3Apr+author%3ASimonBrandner" +
											"+label%3A%22voip%22+repo%3Amatrix-org%2Fmatrix-spec-proposals"
										}
										rel="noreferrer noopener"
									>
										others MSCs to improve VoIP
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.msc2285">
									Rewrote 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/2285" rel="noreferrer noopener">
										MSC2285: Private read receipts
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.msc3827">
									Wrote 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/3827" rel="noreferrer noopener">
										MSC3827: Filtering of <code>/publicRooms</code> by room type
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.msc3786">
									Wrote 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/3786" rel="noreferrer noopener">
										MSC3786: Add a default push rule to ignore <code>m.room.server_acl</code> events
									</a>
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.msc3985">
									Wrote 
									<a href="https://github.com/matrix-org/matrix-spec-proposals/pull/3985" rel="noreferrer noopener">
										MSC3985: Break-out rooms
									</a>
								</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name="Element Web/Desktop" from={t("cv.november", "November") + " 2020"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.rewroteVoipStack">
									Rewrote parts of the VoIP stack, so that they are more flexible
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.voipFeatures">Implemented new VoIP features</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousFeatures">Added numerous features</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousBugs">Fixed numerous bugs</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name="Element Call" from={t("cv.august", "August") + " 2021"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.1-1callLogic">Implemented some of the underlying matrix-js-sdk 1:1 call logic</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousFeatures">Added numerous features</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousBugs">Fixed numerous bugs</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name="Waterfall" from={t("cv.august", "August") + " 2022"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.waterfallConnectingToClients">
									Worked on getting Waterfall to connect to Matrix clients
								</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousFeatures">Added numerous features</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name="Synapse" from={t("cv.july", "July") + " 2021"} to={t("cv.december", "December") + " 2023"}>
						<ul>
							<li>
								<Trans i18nKey="cv.implementedMSC2285">Implemented MSC2285: Private read receipts</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.implementedMSC3827">
									Implemented MSC3827: Filtering of <code>/publicRooms</code> by room type
								</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart
						name="i3-pager"
						from={t("cv.october", "October") + " 2020"}
						to={t("cv.november", "November") + " 2020"}
					>
						<ul>
							<li>
								<Trans i18nKey="cv.rewroteWidget">Rewrote a part of the widget for better extensibility</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.numerousFeatures">Added numerous features</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart
						name="TaskizerDesktop"
						from={t("cv.march", "March") + " 2020"}
						to={t("cv.august", "August") + " 2020"}
					>
						<p>
							<Trans i18nKey="cv.taskizerDescription">
								Taskizer aimed to be a free and open source task-management app with many features. From the perspective
								of today, the code is probably awful. Some if its features were:
							</Trans>
						</p>
						<ul>
							<li>
								<Trans i18nKey="cv.nestedTasks">Nested tasks</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.scheduling">Scheduling</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.projectImporting">Project importing</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.trayIcon">System tray icon</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.keyboardShortcuts">Keyboard shortcuts</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.repeatedTasks">Repeated tasks</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.repeatPRresets">Repeat presets</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.multipleThemes">Multiple themes</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.reminders">Reminders</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart name="YeelightCPPAPI" from={t("cv.june", "June") + " 2019"} to={t("cv.june", "June") + " 2020"}>
						<p>
							<Trans i18nKey="cv.yeelight">
								The Yeelight C++ API is a library for controlling Yeelight bulbs using C++.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.other", "Other")} last>
					<CVPart name="dotfiles">
						<p>
							<Trans i18nKey="cv.dotfiles">
								dotfiles is a repo containing my configuration files as well as info about my setup.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
			</React.Fragment>
		</View>
	);
};
