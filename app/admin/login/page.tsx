import LoginForm from "./login-form";
export default function AdminLogin() {
  return <main className="admin-shell"><div className="admin-card"><a href="/" className="back-link">← กลับหน้าเว็บไซต์</a><div className="admin-logo">C<span>.</span></div><p className="section-index">PRIVATE ACCESS</p><h1>Admin Login</h1><p className="muted">เข้าสู่ระบบเพื่อแก้ไขเนื้อหาเว็บไซต์</p><LoginForm/></div></main>;
}