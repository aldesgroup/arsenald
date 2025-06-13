import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	tutorialSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "Introduction",
		},
		{
			type: "category",
			label: "Components",
			items: [
				{
					type: "category",
					label: "Aldev",
					items: ["aldev/intro"],
				},
				{
					type: "category",
					label: "Goald",
					items: ["goald/intro"],
				},
				{
					type: "category",
					label: "Goaldn",
					items: ["goaldn/intro"],
				},
				{
					type: "category",
					label: "Goaldr",
					items: ["goaldr/intro"],
				},
			],
		},
	],
};

export default sidebars;
