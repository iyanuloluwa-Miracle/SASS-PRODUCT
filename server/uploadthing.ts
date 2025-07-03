import type { H3Event } from "h3";
import { createUploadthing } from "uploadthing/h3";
import type { FileRouter } from "uploadthing/h3";
import { getAuth } from '@clerk/nuxt/server';

const f = createUploadthing();

const auth = (ev: H3Event) => {
  const { userId } = getAuth(ev);
  if (!userId) return null;
  return { id: userId };
}; // Fake auth function - replace with your Clerk auth

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({
    pdf: {
      maxFileSize: "32MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ event }) => {
      // This code runs on your server before upload
      const user = await auth(event);

      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
      
      // Here you can process the uploaded PDF
      // For example, send it to your AI service for summarization
      
      return { uploadedBy: metadata.userId, fileUrl: file.ufsUrl };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;