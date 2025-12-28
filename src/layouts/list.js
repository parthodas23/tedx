import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dkmwu9ec1",
  api_key: "887557929275997",
  api_secret: "siwECNfbaiBEP4JqNa9EZpbyBIs",
});

async function findEverything() {
  try {
    const result = await cloudinary.v2.search
      .expression('folder:speaker/*') // This looks for anything inside 'organizer'
      .execute();

    console.log("Total files found:", result.total_count);
    console.log("URLs:", result.resources.map(r => r.secure_url));
  } catch (error) {
    console.error("Search Error:", error);
  }
}

findEverything();