export async function generateImageUrl(prompt: string) {
  const res = await fetch('/api/dalle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  const { imageUrl } = await res.json()
  return imageUrl;
}