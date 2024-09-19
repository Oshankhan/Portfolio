import sanityCllient from "@sanity/client";
import imageBuilder from "@sanity/image-url";
export const client = sanityCllient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-07-02",
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source);
