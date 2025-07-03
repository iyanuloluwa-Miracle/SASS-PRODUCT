# Uploadthing Setup Instructions

## 1. Get Uploadthing API Keys

1. Sign up at [https://uploadthing.com/](https://uploadthing.com/)
2. Create a new project
3. Copy the API keys from your dashboard

## 2. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
NUXT_UPLOADTHING_TOKEN=your_uploadthing_token_here
```

**Important**: The `NUXT_` prefix is required for Nuxt to recognize the environment variable.

## 3. Files Created

The following files have been created for Uploadthing integration:

- `server/uploadthing.ts` - Server-side upload configuration (following official docs)
- `nuxt.config.ts` - Updated to include the Uploadthing module

## 4. Usage

The Profile.vue page has been updated to use Uploadthing for file uploads. The integration includes:

- File validation (PDF only, 10MB limit)
- Drag and drop support
- Progress tracking
- Error handling
- File URL storage for further processing

## 5. Next Steps

1. Add your Uploadthing token to the `.env` file
2. Restart your development server
3. Test the file upload functionality
4. Implement your backend API to process the uploaded files

## 6. Backend Integration

To process uploaded files, you'll need to:

1. Create an API endpoint (e.g., `/api/process-document`)
2. Use the `fileUrl` from the upload response
3. Process the PDF and return summary data
4. Update the `processUploadedFile` function in Profile.vue to call your API

## 7. Official Documentation

This implementation follows the [official Uploadthing Nuxt documentation](https://docs.uploadthing.com/getting-started/nuxt). 