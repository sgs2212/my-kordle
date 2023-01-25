import { useRouter } from "next/router";

export default function Item() {
  const router = useRouter();

  console.log(router.query);
  return <div>디테일 페이지임</div>;
}
