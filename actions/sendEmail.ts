"use server"

export const sendEmail = async (FormData:FormData) => {
    console.log("Running on Server")
    console.log(FormData.get("senderEmail"));
    console.log(FormData.get("senderName"));
    console.log(FormData.get("message"));
}