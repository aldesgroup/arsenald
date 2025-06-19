import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Devotion",
	tagline: "Go + React & React Native fullstack framework",
	favicon: "img/devotion-white.svg",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	plugins: [
		[
			"docusaurus-plugin-typedoc",
			{
				entryPoints: ["../../goaldn/lib/index.ts"], // adjust path as needed
				tsconfig: "../../goaldn/tsconfig.json",
				out: "docs/goaldn/api",
				sidebar: {
					pretty: true,
					typescript: true,
				},
			},
		],
	],

	// Set the production url of your site here
	url: "https://aldesgroup.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/devotion",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "aldesgroup", // Usually your GitHub org/user name.
	projectName: "devotion", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					routeBasePath: "/", // no blogging (for now)
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/aldesgroup/devotion/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: false,
				// blog: {
				// 	showReadingTime: true,
				// 	feedOptions: {
				// 		type: ["rss", "atom"],
				// 		xslt: true,
				// 	},
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	// editUrl:
				// 	// 	"https://github.com/aldesgroup/devotion/tree/main/packages/create-docusaurus/templates/shared/",
				// 	// Useful options to enforce blogging best practices
				// 	onInlineTags: "warn",
				// 	onInlineAuthors: "warn",
				// 	onUntruncatedBlogPosts: "warn",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Devotion",
			logo: {
				alt: "Devotion Logo",
				src: "img/devotion.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "guideSidebar",
					position: "left",
					label: "Guide",
				},
				// { to: "/api", label: "Reference", position: "left" },
				{
					href: "https://github.com/aldesgroup/devotion",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			// links: [
			// 	{
			// 		title: "Docs",
			// 		items: [
			// 			{
			// 				label: "Tutorial",
			// 				to: "/docs/intro",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "Community",
			// 		items: [
			// 			{
			// 				label: "Stack Overflow",
			// 				href: "https://stackoverflow.com/questions/tagged/docusaurus",
			// 			},
			// 			{
			// 				label: "Discord",
			// 				href: "https://discordapp.com/invite/docusaurus",
			// 			},
			// 			{
			// 				label: "X",
			// 				href: "https://x.com/docusaurus",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: "More",
			// 		items: [
			// 			{
			// 				label: "Blog",
			// 				to: "/blog",
			// 			},
			// 			{
			// 				label: "GitHub",
			// 				href: "https://github.com/aldesgroup/devotion",
			// 			},
			// 		],
			// 	},
			// ],
			copyright: `Copyright © 2024-present Aldes Group`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
