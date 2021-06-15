import React, { SVGProps } from 'react'

export interface HeaderItemProps {
  title: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const HeaderItem: React.FunctionComponent<HeaderItemProps> = (
  props: HeaderItemProps
) => {
  const { Icon, title } = props
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem