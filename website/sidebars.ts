import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import goaldnMenu from "./docs/goaldn/api/typedoc-sidebar";

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
	guideSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "Introduction",
		},
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
			link: {
				type: "doc",
				id: "goaldn/intro",
			},
			items: [
				// "goaldn/intro",
				"goaldn/intro",
				{
					type: "category",
					label: "API Reference",
					link: {
						type: "doc",
						id: "goaldn/api/index",
					},
					items: goaldnMenu.items,
				},
			],
		},
		{
			type: "category",
			label: "Goaldr",
			items: ["goaldr/intro"],
		},
	],
};

export default sidebars;
