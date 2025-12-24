import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-9 text-l w-9 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-shadow-amber-10000 text-lg leading-relaxed text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis harum ad numquam consectetur voluptatibus.</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className= 'text-white font-medium px-6 py-2 rounded-full '>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-3=2 rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
