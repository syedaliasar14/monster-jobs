export async function generateChat(prompt: string, response_format?: any) {
  const res = await fetch('/api/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt, response_format})
  })
  const { message } = await res.json()
  return message;
}