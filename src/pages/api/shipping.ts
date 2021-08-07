// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {CartType} from "../../redux/app/models";
import {get} from "../../libs/utils/localDataStorage";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CartType[]>
) {
  console.log(get('cartItems'))
  res.status(200).json([])
}

type provinceTypes = {
  id: number,
  name: string
}

export function getProvince(
  req: NextApiRequest,
  res: NextApiResponse<provinceTypes[]>
){
  
}
