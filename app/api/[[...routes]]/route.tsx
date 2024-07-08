/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'NEW',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  return c.res({
    image: "https://eth-cc-meeting-post-ecohenadrsbls-projects.vercel.app\EthCC 2024_all.png",
    intents: [
      <Button.Link href = "https://meetings.hubspot.com/asaf-nadler/meet-addressable-at-ethcc?uuid=09657fe5-b52e-4902-8131-defcdf4505b2">Waffels on us! Book a Meeting</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
