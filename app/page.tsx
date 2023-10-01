'use client';

import ProjectList from '@/components/ProjectList';

import { projects, rooms } from '@/components/data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='w-full flex-col'>
        <h1 className='head_text'>
          Furniture Tracker
        </h1>
        <p className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <ProjectList
          projects={projects}
          rooms={rooms}
        />
      </section>
    </main>
  )
}
