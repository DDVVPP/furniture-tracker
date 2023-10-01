'use client';

import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project, rooms }: any) => {
  const filteredRooms = rooms.filter((room: any) => {
    room.ref_ids.includes(project.id)
  })

  return (
    <Link
      href={{
        pathname:'/',
        query: { filteredRooms }
      }}
      className='prompt_card'
    >
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={project.image}
            alt='user_image'
            width={100}
            height={100}
            className='object-contain'
          />
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {project.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default ProjectCard;
