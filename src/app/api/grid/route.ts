import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/data/grid.json');

async function getGridData(): Promise<{ cells: number[] }> {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { cells: [] };
  }
}

async function saveGridData(data: { cells: number[] }) {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await getGridData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const { index } = await request.json();
    if (typeof index !== 'number') {
      return NextResponse.json({ error: 'Invalid index' }, { status: 400 });
    }

    const data = await getGridData();
    const cells = new Set(data.cells);

    if (cells.has(index)) {
      cells.delete(index);
    } else {
      cells.add(index);
    }

    const newData = { cells: Array.from(cells) };
    await saveGridData(newData);

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
