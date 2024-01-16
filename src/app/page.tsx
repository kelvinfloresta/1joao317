import { translation } from "@/lib/dictionaries/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const { home: t } = await translation()

  return (
    <div className="min-h-screen flex mt-12 max-w-lg mx-auto">
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">{t.title}</h1>
      <p className="mt-4">{t.subtitle}</p>
      <p className="mt-4">{t.subtitle_2}</p>

      <div className="flex mt-8 gap-2 mx-auto">
        <Link href="/donate">
          <Button className="text-lg w-32">
            {t.donate}
          </Button>
        </Link>
        <Link href="/know-more">
          <Button className="text-lg" variant='secondary'>
            {t.know_more}
          </Button>
        </Link>
      </div>
    </div>
    </div>
  )
}