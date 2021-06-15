import Image from 'next/image'
import React from 'react'

const Header: React.FunctionComponent = () => {
  return (
    <header className="">
      <h1>This is the header</h1>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
