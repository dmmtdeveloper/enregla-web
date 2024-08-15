import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(req.body)

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Bad Request" });
    }

    // Procesa la data o guarda en la base de datos...

    return res.status(200).json({ message: "Success" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;
