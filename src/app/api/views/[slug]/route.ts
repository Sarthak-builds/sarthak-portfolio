import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const VIEWS_FILE = path.join(process.cwd(), 'src', 'data', 'blog-views.json');

function readViews(): Record<string, number> {
  try {
    const raw = fs.readFileSync(VIEWS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeViews(views: Record<string, number>) {
  fs.writeFileSync(VIEWS_FILE, JSON.stringify(views, null, 2), 'utf-8');
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = readViews();
  return NextResponse.json({ views: views[slug] ?? 0 });
}

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = readViews();
  views[slug] = (views[slug] ?? 0) + 1;
  writeViews(views);
  return NextResponse.json({ views: views[slug] });
}
