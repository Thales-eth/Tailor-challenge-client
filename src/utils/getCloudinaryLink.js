import uploadService from "@/services/upload.service"

export async function getCloudinaryLink(avatar) {
    if (typeof avatar === "string" && avatar.startsWith("https://res.cloudinary.com")) return avatar

    let cloudinaryLink = ""

    if (avatar) {
        cloudinaryLink = await uploadService.uploadImage(avatar).then(({ data }) => data)
    }

    return cloudinaryLink
}

