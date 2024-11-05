import { buttonVariants } from '@/components/ui/button'
import Link from "next/link"
import { Section } from './Section'
import { GithubIcon } from 'lucide-react'
import { LinkedinIcon } from 'lucide-react'
import { cn } from '@/lib/utils'


export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary"></h1>
        <div className="flex-1"/>
        <ul className="flex-item-center gap2">
          <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0" )}
          href="https://github.com/Noreea"
          >
            <GithubIcon size={16} className="text-foreground"/>
          </Link>

          <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0" )}
          href="https://www.linkedin.com/in/norea-d-86424a297/"
          >
            <LinkedinIcon size={16} className="text-foreground"/>
          </Link>

        </ul>
      </Section>
    </header>
  )
}
