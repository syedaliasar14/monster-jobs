export async function generateImage(prompt: string) {
  const res = await fetch('/api/dalle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  const { imageUrl, imageBase64 } = await res.json()
  return imageBase64;
}