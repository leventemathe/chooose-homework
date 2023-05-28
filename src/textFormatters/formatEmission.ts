export function formatEmission(emission: number) {
  const isBigNumber = Math.abs(emission) / 1000 >= 1;
  const emissionNumber = isBigNumber ? emission / 1000 : emission;
  const emissionUnit = isBigNumber ? 't' : 'kg';
  const emissionText = `${emissionNumber} ${emissionUnit} `;

  return emissionText;
}
