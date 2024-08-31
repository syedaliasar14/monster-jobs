export function createEmployeeDesc(employee: any): string {
  return `Name: ${employee.name}\n` +
    `Hair Color: ${employee.hairColor}\n` +
    `Skin Color: ${employee.skinColor}\n` +
    `Number of Eyes: ${employee.numberOfEyes}\n` +
    `Number of Arms: ${employee.numberOfArms}\n` +
    `Number of Legs: ${employee.numberOfLegs}\n` +
    `Skin Texture: ${employee.skinTexture}\n` +
    `Features: ${employee.features.join(', ')}\n`;
}

export function createEmployeeDesc2(employee: any): string {
  const name = employee.name
  const hairColor = employee.hairColor.toLowerCase()
  const skinColor = employee.skinColor.toLowerCase()
  const numberOfEyes = employee.numberOfEyes
  const numberOfArms = employee.numberOfArms
  const numberOfLegs = employee.numberOfLegs
  const skinTexture = employee.skinTexture.toLowerCase()
  const features = employee.features.map((feature: string) => feature.toLowerCase())

  return `${name} is a ${hairColor}-haired, ${skinColor}-skinned ${numberOfEyes}-eyed 
    ${numberOfArms}-armed ${numberOfLegs}-legged monster with ${skinTexture} skin and 
    ${features.length !== 0 ? features.join(', ') : 'no'} features.`;
}