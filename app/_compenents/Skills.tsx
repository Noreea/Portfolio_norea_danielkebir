
import { Badge } from "@/components/ui/badge"
import { Section } from './Section'
import { ReactLogo } from "./icons/ReactLogo"
import {Code } from "./Code"
import { TailwindLogo } from "./icons/TailwindLogo"
import { PythonIcon } from "./icons/PythonIcon"

export const Skills = () => {
  return (
  <Section className="flex flex-col items-start gap-2">
    <Badge variant="outline">Compétences</Badge>
        <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je travaille avec...
        </h2>
        <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
                  <ReactLogo size={42} className="animate-spin" style={{animationDuration: "10s"}}/>
              <h3 className="text-2xl font-semibold tracking-tight">React</h3>
              <p className="text-sm text-muted-foreground ">Mon framwork front-end préféré c&apos;est <Code>React</Code>. J&apos;utilise aussi <Code>Next.js</Code>. </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
                  <TailwindLogo size={42} className="animate-wave" />
              <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
              <p className="text-sm text-muted-foreground "> Je peux créer de <u>belles</u> app <i>en utilisant <Code>Tailwind CSS</Code></i> </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
                  <PythonIcon size={42} className="animate-spin" style={{animationDuration: "10s"}}/>
              <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
              <p className="text-sm text-muted-foreground ">Mon language back-end c&apos;est <Code>Python</Code>. J&apos;utilise aussi <Code>Django</Code>  </p>
          </div>
          </div>
  </Section>
  )
}
