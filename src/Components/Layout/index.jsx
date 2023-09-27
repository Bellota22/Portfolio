import React from 'react'

function Layout({children}) {
  return (
    
    <div className='flex flex-col justify-center items-center w-full min-h-screen bg-repeat-y bg-cover  ' style={{ backgroundImage: 'url(\'../../../background.jpg\')' }}>
        {children}
    </div>
  )
}

export default Layout