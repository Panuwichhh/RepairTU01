import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RepairTU01/', // ระบุชื่อ repository ของคุณที่นี่
})
