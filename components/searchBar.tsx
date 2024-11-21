'use client';

import React, { useState } from 'react';

export default function SearchBar({
  tasks,
  onSearch,
}: {
  tasks: { title: string; description: string; column: string }[];
  onSearch: (results: any[]) => void;
}) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredTasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(value) || task.description.toLowerCase().includes(value),
    );

    onSearch(filteredTasks);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        value={query}
        onChange={handleSearch}
        placeholder='Buscar por título o descripción...'
        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white'
      />
    </div>
  );
}
