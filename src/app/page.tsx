import { redirect } from "next/navigation";

export default function Home() {
	redirect("/dashboard"); // 홈페이지 접속 시 대시보드로 자동 이동
}
