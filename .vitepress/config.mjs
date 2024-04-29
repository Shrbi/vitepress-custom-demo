import { defineConfig } from "vitepress";

import customContainerPlugin from "./CustomContainerPlugin/customContainer";

export default defineConfig({
  title: "Custom Site",
  description: "A custom site template",
  appearance: false,
  base: "/vitepress-custom-demo/",
  themeConfig: {
    navs: [
      {
        text: "🏠 HOME",
        href: "/",
      },
      {
        text: "🔥 New",
        href: "/",
      },
      {
        text: "👩‍👩‍👧‍👧 Popular",
        href: "/",
      },
      {
        text: "外部連結",
        children: [
          {
            text: "臺北市立復興高級中學",
            href: "https://www.fhsh.tp.edu.tw/",
          },
        ],
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(customContainerPlugin.md_container_plugin());
    },
  },
});
