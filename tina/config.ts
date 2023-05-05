import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "37afb586-453d-440c-9e8c-4e61fc75e673",
  token: "dc89771b6e8a6e15c9a3eb47b5f6d5ddfb6e31ef",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title"
          },
          {
            type: "string",
            label: "Description",
            name: "description"
          },
          {
            type: "image",
            label: "Avatar",
            name: "avatar"
          },
          {
            type: "image",
            label: "Footer",
            name: "footer"
          },
          {
            type: "object",
            label: "Links",
            name: "links",
            list: true,
            fields: [
              {
                type: "string",
                label: "Text",
                name: "text"
              },
              {
                type: "string",
                label: "Link",
                name: "link"
              }
            ]
          }
        ],
      },
    ],
  },
});
