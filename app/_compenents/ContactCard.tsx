import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link  from 'next/link';
import { cn } from '@/lib/utils'
import React from 'react';


export const ContactCard = (props: {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  mediumImage?: string;
  name: string;
  description: string;
  url: string
  className?: string
  hideMediumImage?: boolean;

}) => {

  return (
    <Link href={props.url} className={cn("w-full", props.className)}>
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
    <div className="relative w-10 h-10">
      {/* <img
        src={props.image}
        alt={props.name}
        className="w-10 h-10 rounded-full object-contain"
        /> */}
        <props.logo size={40}/>

         {!props.hideMediumImage && props.mediumImage && (
            <img
              src={props.mediumImage}
              alt={props.name}
              className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
            />
          )}



      </div>
      <div className="flex-1">
        <div className="flex item-center gap-2">
      <p className="text-lg font-semibold">{props.name}</p>
      </div>
      <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
      size={16}/>
    </Card>
    </Link>
  )
}
