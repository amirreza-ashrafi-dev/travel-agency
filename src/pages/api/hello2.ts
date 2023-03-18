// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import module from './module';
console.log("file running");

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: any
) {
  console.log(module);
//   module.push("hello");
  res.status(200).json({ name: 'John Doe' })
}
