import React from "react";
import { useRouter } from "next/router";

export default function MyID() {
  const router = useRouter();
  console.log(router);
  let { xyz: id } = router.query;

  return <div>I am third brake id is {id}</div>;
}
