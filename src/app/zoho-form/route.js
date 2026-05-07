import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'zoho-form.html');
  try {
    const content = await readFile(filePath, 'utf8');
    return new Response(content, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return new Response('Form not found', { status: 404 });
  }
}
