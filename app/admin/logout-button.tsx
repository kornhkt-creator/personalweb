 "use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
export default function LogoutButton(){const router=useRouter();return <button className="logout-btn" onClick={async()=>{const supabase=createClient();await supabase.auth.signOut();router.push("/admin/login");router.refresh();}}>ออกจากระบบ ↗</button>}