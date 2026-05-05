import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = db.prepare("SELECT id, name, email, password FROM users WHERE email = ?").get(email) as
    | { id: number; name: string; email: string; password: string }
    | undefined;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
}
