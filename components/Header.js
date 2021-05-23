import Image from 'next/image'

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-cneter flex-grow sm:flex-grow-0'>
          <Image
            src='/images/amazon-logo.png'
            height={40}
            width={150}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
      </div>

      {/* Bottom nav */}
      <div></div>
    </header>
  )
}

export default Header
