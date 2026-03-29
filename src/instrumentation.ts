export async function register() {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NEXT_PHASE !== 'phase-production-build'
  ) {
    const { getPayload } = await import('payload')
    const { default: config } = await import('../payload.config')
    await getPayload({ config })
  }
}
