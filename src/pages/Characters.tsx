import { Link, useLoaderData } from 'react-router-dom';

import { Character } from '../../lib/rick-and-morty-api-client';
import React from 'react';
import { useFlag } from '@featurevisor/react';

const Characters = () => {
  const { characters } = useLoaderData() as { characters: Character[] };

  const isPaginationEnabled = useFlag('pagination', {
    country: new URLSearchParams(window.location.search).get('country'),
  });
  console.log(isPaginationEnabled);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4" data-testid="characters-list">
      <p className="font-bold mb-4">Select a character:</p>
      <ul>
        {characters.map((character) => (
          <li key={character.id} className="mb-4">
            <Link to={`character/${character.id}`} data-testid={`character-link-${character.id}`}>
              <div className="flex flex-row items-center space-x-2 border border-gray-100 rounded-md hover:border-blue-200 hover:bg-blue-100/50 p-4">
                <img
                  src={character.image}
                  alt={`${character.name} - Profile Image`}
                  className="w-10 h-10 rounded-full"
                />
                <p>{character.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isPaginationEnabled && <p>CHARAKTERS PAGINATION</p>}
    </div>
  );
};

export default Characters;
