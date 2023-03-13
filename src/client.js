import sanityCllient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityCllient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-01",
  useCdn: true,
  token: process.env.REACT_TOKEN_SANITY,
});

const builder = imageBuilder(client);
export const urlFor = (source) => builder.image(source);
