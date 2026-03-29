import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import '@payloadcms/next/css'
import { importMap } from './importMap'

export { metadata } from '@payloadcms/next/layouts'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const serverFunction: ServerFunctionClient = async (args) => {
    'use server'
    return handleServerFunctions({ ...args, config, importMap })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
