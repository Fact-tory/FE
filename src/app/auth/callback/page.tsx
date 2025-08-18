// // app/auth/callback/page.tsx
// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import axios from "@/lib/axios";

// export default function Callback() {
//   const qs = useSearchParams();
//   const router = useRouter();
//   const [err, setErr] = useState<string | null>(null);

//   useEffect(() => {
//     const code = qs.get("code");
//     const state = qs.get("state");
//     if (!code || !state) {
//       setErr("code/state가 없습니다.");
//       return;
//     }
//     (async () => {
//       try {
//         const redirect_uri = `${window.location.origin}/auth/callback`;
//         const { data } = await axios.post(
//           `/api/v1/auth/social/kakao/callback`,
//           {
//             code,
//             state,
//             redirect_uri,
//           }
//         );
//         localStorage.setItem("accessToken", data.data.accessToken);
//         localStorage.setItem("refreshToken", data.data.refreshToken);
//         router.replace("/");
//       } catch (e: any) {
//         setErr(e?.response?.data?.message ?? "로그인 처리 중 오류");
//       }
//     })();
//   }, [qs, router]);

//   if (err) return <div>소셜 로그인 실패: {err}</div>;
//   return <div>로그인 처리 중...</div>;
// }
