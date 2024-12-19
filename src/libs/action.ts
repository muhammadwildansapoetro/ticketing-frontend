"use server";

import { revalidateTag } from "next/cache";

export const revalidate = (tags: string) => {
  revalidateTag(tags);
};
