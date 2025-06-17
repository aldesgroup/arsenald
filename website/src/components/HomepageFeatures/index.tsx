import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Goald: Go backend",
		Svg: require("@site/static/img/goald.svg").default,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get
				your website up and running quickly.
			</>
		),
	},
	{
		title: "Goaldr: React web frontend",
		Svg: require("@site/static/img/goaldr.svg").default,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get
				your website up and running quickly.
			</>
		),
	},
	{
		title: "Goaldn: React Native for mobile",
		Svg: require("@site/static/img/goaldn.svg").default,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get
				your website up and running quickly.
			</>
		),
	},
	{
		title: "Aldev: deterministic coding assistant",
		Svg: require("@site/static/img/aldev.svg").default,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get
				your website up and running quickly.
			</>
		),
	},
];

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
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
