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
				<CVSection name={t("cv.general", "General")}>
					<CVPart name={t("cv.languages", "Languages")}>
						<ul>
							<li>
								<Trans i18nKey="cv.english">English — C2 (Cambridge English)</Trans>
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
				<CVSection name={t("cv.csAndSe", "Computer science and software engineering")}>
					<CVPart name={t("cv.programmingLanguages", "Programming Languages")}>
						<ul>
							<li>JavaScript and TypeScript</li>
							<li>Python</li>
							<li>Go</li>
							<li>Rust</li>
							<li>C/C++</li>
							<li>Java</li>
							<li>Agda</li>
						</ul>
					</CVPart>
					<CVPart name={t("cv.markupAndStyleSheetLanguages", "Markup and Style Sheet Languages")}>
						<ul>
							<li>LaTeX</li>
							<li>Typst</li>
							<li>Markdown</li>
							<li>HTML</li>
							<li>CSS/SCSS</li>
							<li>QML</li>
							<li>FXML</li>
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
					<CVPart name={t("cv.other", "Other")}>
						<ul>
							<li>
								<Trans i18nKey="cv.operatingSystems">Linux - daily usage of Debian and NixOS</Trans>
							</li>
							<li>
								<Trans i18nKey="cv.basicKnowledge">Basic knowledge of</Trans>: GIMP, Krita, DaVinci Resolve, Inkscape,
								Figma, Affinity Photo, Microsoft Windows
							</li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.education", "Education")}>
					<CVPart name={t("cv.ctu", "Open informatics at CTU FEE")} from={t("cv.september", "September") + " 2024"}>
						<div />
					</CVPart>
					<CVPart
						name={t("cv.gfk", "Gymnázium Františka Křižíka (graduation)")}
						from={t("cv.september", "September") + " 2016"}
						to={t("cv.june", "June") + " 2024"}
					>
						<ul>
							<li>
								<Trans>English language — Cambridge English C2</Trans>
							</li>
							<li>
								<Trans>Czech language and literature — 1</Trans>
							</li>
							<li>
								<Trans>Mathematics — 1</Trans>
							</li>
							<li>
								<Trans>Physics — 1</Trans>
							</li>
						</ul>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.theses", "Theses")}>
					<CVPart
						name={t("cv.highSchoolThesis", "Using the Matrix Protocol for Video Calls")}
						from={t("cv.march", "March") + " 2023"}
						to={t("cv.February", "February") + " 2024"}
					>
						<p>
							<Trans i18nKey="cv.highSchoolThesisDescription">
								I wrote my high-school thesis about Using the Matrix Protocol for Video Calls (Využití protokolu Matrix
								pro videohovory). I have taken part in the
								<a rel="noreferrer noopener" href="https://www.soc.cz/">
									SPA (Students' Professional Activities)
								</a>
								with the thesis and have won the second place in the region round of the competition. The
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
									thesis text
								</a>
								and the
								<a
									rel="noreferrer noopener"
									// eslint-disable-next-line max-len
									href="https://nightly.link/SimonBrandner/RocnikovaPrace-MatrixRTC/workflows/build.yaml/stable/matrixRTCPresentation.pdf.zip"
								>
									thesis presentation
								</a>
								.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.universityProjects", "University projects")}>
					<CVPart name={t("cv.pjvImageEditorTitle", "Image Editor in Java")}>
						<p>
							<Trans i18nKey="cv.pjvImageEditor">
								A demonstration of how one could implement an image editor in Java with features such as layers.
							</Trans>
						</p>
					</CVPart>
					<CVPart name={t("cv.apoCubeTitle", "Rendering a 3D cube on MZ_APO hardware")}>
						<p>
							<Trans i18nKey="cv.apoCube">
								Rendering of a 3D cube on hardware provided by the Computer Architectures course at CTU FEE.
							</Trans>
						</p>
					</CVPart>
					<CVPart name={t("cv.psiaUdpSenderReceiverTitle", "A UDP file transmitter")}>
						<p>
							<Trans i18nKey="cv.psiaUdpSenderReceiver">
								A demonstration of how one could implement a file transmitter application over UDP with Go-Back-N ARQ.
							</Trans>
						</p>
					</CVPart>
					<CVPart name={t("cv.gemCppTitle", "Implementation of Gaussian Elimination in C++")}>
						<p>
							<Trans i18nKey="cv.gemCpp">A demonstration of how one could implement Gaussian elimination in C++.</Trans>
						</p>
					</CVPart>
					<CVPart name="Spam Filter">
						<p>
							<Trans i18nKey="cv.spamFilter">
								A spam filter implementation in Python using Naive Bayes with Laplace smoothing.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.workExperiences", "Work Experiences")}>
					<CVPart
						name={t("cv.elementInternship", "Element Internship")}
						from={t("cv.may", "May") + " 2022"}
						to={t("cv.december", "December") + " 2023"}
					>
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
				<CVSection name={t("cv.talks", "Talks")}>
					<CVPart name="Cascaded Foci (Selective Forwarding Units) - FOSDEM 2023">
						<p>
							<Trans i18nKey="cv.fosdem2023foci">
								During my internship at Element, I was part of a team that worked on cascaded selective forwarding
								units. I presented our work on FOSDEM 2023 in the
								<a
									rel="noreferrer noopener"
									href="https://archive.fosdem.org/2023/schedule/event/cascaded_selective_forwarding_units/"
								>
									Cascaded Foci (Selective Forwarding Units) talk
								</a>
								.
							</Trans>
						</p>
					</CVPart>
				</CVSection>
				<CVSection name={t("cv.projects", "Projects")} last>
					<CVPart name="GitHub">
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
					<CVPart name="dotfiles">
						<p>
							<Trans i18nKey="cv.dotfiles">
								<a href="https://github.com/SimonBrandner/dotfiles" rel="noreferrer noopener">
									dotfiles
								</a>{" "}
								is a repo containing my configuration files as well as info about my setup. I am currently running NixOS
								with a custom desktop environment built on top of SwayFX (before Hyprland) and Aylur's Gtk Shell.
							</Trans>
						</p>
					</CVPart>
					<CVPart name="Oblichey" from={t("cv.june", "June") + " 2024"} to={t("cv.january", "January") + " 2025"}>
						<p>
							<Trans i18nKey="cv.oblichey">
								A facial authentication software for Linux built in Rust inspired by Howdy.
							</Trans>
						</p>
					</CVPart>
					<CVPart name="hy3" from={t("cv.june", "June") + " 2024"} to={t("cv.june", "June") + " 2024"}>
						<ul>
							<li>
								<Trans i18nKey="cv.hy3visualDefects">
									Fixed a bug where the tab bar would have visual defects after switching workspaces
								</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart
						name="Discord NLP Bot"
						from={t("cv.december", "December") + " 2023"}
						to={t("cv.march", "March") + " 2024"}
					>
						<p>
							<Trans i18nKey="cv.discordNlpBot">
								A Discord Bot to perform Natural Language Processing (NLP) and related tasks.
							</Trans>
						</p>
					</CVPart>
					<CVPart
						name="Tuxedo-rs"
						from={t("cv.december", "December") + " 2023"}
						to={t("cv.january", "January") + " 2024"}
					>
						<ul>
							<li>
								<Trans i18nKey="cv.tuxedoMonochromeFix">
									Fixed a bug which would cause monochrome LED devices not to work
								</Trans>
							</li>
						</ul>
					</CVPart>
					<CVPart
						name="Matrix"
						from={t("cv.november", "November") + " 2020"}
						to={t("cv.december", "December") + " 2023"}
					>
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
					<CVPart
						name="Element Web/Desktop"
						from={t("cv.november", "November") + " 2020"}
						to={t("cv.december", "December") + " 2023"}
					>
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
					<CVPart
						name="Element Call"
						from={t("cv.august", "August") + " 2021"}
						to={t("cv.december", "December") + " 2023"}
					>
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
					<CVPart
						name="Waterfall"
						from={t("cv.august", "August") + " 2022"}
						to={t("cv.december", "December") + " 2023"}
					>
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
			</React.Fragment>
		</View>
	);
};
