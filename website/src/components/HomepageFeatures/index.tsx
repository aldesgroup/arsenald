import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	link: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Goald",
		link: "goald",
		Svg: require("@site/static/img/goald.svg").default,
		description: <>Opiniated backend framework for building application servers with Go.</>,
	},
	{
		title: "GoaldR",
		link: "goaldr",
		Svg: require("@site/static/img/goaldr.svg").default,
		description: (
			<>React-based framework for building web apps working with Goald app servers.</>
		),
	},
	{
		title: "GoaldN",
		link: "goaldn",
		Svg: require("@site/static/img/goaldn.svg").default,
		description: (
			<>React Native framework for building mobile apps working with Goald app servers.</>
		),
	},
	{
		title: "Aldev",
		link: "aldev",
		Svg: require("@site/static/img/aldev.svg").default,
		description: (
			<>
				Dev assistant that relies on Goald's Go-code-first approach in Devotion-based app
				projects.
			</>
		),
	},
];

function Feature({ title, Svg, description, link }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg
					className={styles.featureSvg}
					role="img"
					onClick={() => {
						window.location.href = link;
					}}
				/>
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
