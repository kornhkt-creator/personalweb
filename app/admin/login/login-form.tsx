 "use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
export default function LoginForm() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [error,setError]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setError("");
    try {const supabase=createClient();const {error}=await supabase.auth.signInWithPassword({email,password});
      if(error) throw error;
      const {data}=await supabase.auth.getUser();
      if(data.user?.app_metadata?.role!=="admin"){await supabase.auth.signOut();throw new Error("บัญชีนี้ไม่มีสิทธิ์ Admin");}
      router.push("/admin");router.refresh();
    } catch(err){setError(err instanceof Error?err.message:"เข้าสู่ระบบไม่สำเร็จ");} finally{setBusy(false);}
  }
  return <form className="admin-form" onSubmit={submit}><label>อีเมล Admin<input type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="admin@example.com"/></label><label>รหัสผ่าน<input type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="รหัสผ่าน Admin"/></label>{error&&<p className="form-error" role="alert">{error}</p>}<button className="button dark-button" disabled={busy}>{busy?"กำลังเข้าสู่ระบบ…":"เข้าสู่ระบบ →"}</button><p className="form-help">ไม่มีปุ่มสมัครสมาชิกสาธารณะ ต้องสร้างบัญชี Admin จาก Supabase Dashboard เท่านั้น</p></form>;
}