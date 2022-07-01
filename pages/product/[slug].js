import React from 'react'
import { useRouter } from 'next/router'

export default function Slug() {
    const router = useRouter();
    const {slug}=router.query
  return (
    <div>
      name of product is {slug}
    </div>
  )
}
