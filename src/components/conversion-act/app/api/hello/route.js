import Connect from "@/database/connect";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Resolve the path to the IPC JSON file
    const ipcFilePath = path.resolve(
      process.cwd(),
      "C:/NextJs/indianlaw/src/app/api/hello/BSA.json"
    );
    const ipcData = JSON.parse(await fs.readFile(ipcFilePath, "utf-8"));
    console.log("IPC data read successfully");

    await Connect();

    // Arrays to store results
    const successfullySaved = [];
    const failedToSave = [];

    // Insert data into the database
    await Promise.all(
      ipcData.map(async (section) => {
        try {
        } catch (error) {
          console.error(`Error saving section ${section.sectionNo}:`, error);
          failedToSave.push({
            sectionNo: section.sectionNo,
            error: error.message,
          });
        }
      })
    );

    // Return a success response
    return new Response(
      JSON.stringify({
        message: "Data processing completed",
        successfullySaved,
        failedToSave,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
