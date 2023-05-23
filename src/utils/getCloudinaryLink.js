import uploadService from "@/services/upload.service"

export async function getCloudinaryLink(avatar) {
    let cloudinaryLink = ""

    if (avatar) {
        cloudinaryLink = await uploadService.uploadImage(avatar).then(({ data }) => data)
    }

    return cloudinaryLink
}

