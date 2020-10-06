import * as React from 'react';

import { Animal } from './types';
import FilterableList from './filterable-list';

interface Props {
  onSelect: (animal: Animal) => void;
}

const mockAnimals: Animal[] = [
  {
    id: '001',
    name: 'Cat',
    description: 'A cat description',
  },
  {
    id: '002',
    name: 'Dog',
    description: 'A dog description',
  },
  {
    id: '003',
    name: 'Snake',
    description: 'A snake description',
  },
  {
    id: '004',
    name: 'Frog',
    description: 'A frog description',
  },
  {
    id: '005',
    name: 'Mouse',
    description: 'A mouse description',
  },
  {
    id: '006',
    name: 'Duck',
    description: 'A duck description',
  },
  {
    id: '007',
    name: 'Hen',
    description: 'A hen description',
  },
  {
    id: '008',
    name: 'Goat',
    description: 'A goat description',
  },
  {
    id: '009',
    name: 'Sheep',
    description: 'A sheep description',
  },
  {
    id: '010',
    name: 'Tiger',
    description: 'A tiger description',
  },
  {
    id: '011',
    name: 'Leopard',
    description: 'A leopard description',
  },
  {
    id: '012',
    name: 'Lion',
    description: 'A lion description',
  },
  {
    id: '013',
    name: 'Zebra',
    description: 'A zebra description',
  },
  {
    id: '014',
    name: 'Giraffe',
    description: 'A giraffe description',
  },
  {
    id: '015',
    name: 'Donkey',
    description: 'A donkey description',
  },
  {
    id: '016',
    name: 'Parrot',
    description: 'A parrot description',
  },
  {
    id: '017',
    name: 'Eagle',
    description: 'An eagle description',
  },
  {
    id: '018',
    name: 'Pig',
    description: 'A pig description',
  },
  {
    id: '019',
    name: 'Worm',
    description: 'A worm description',
  },
  {
    id: '020',
    name: 'Cat',
    description: 'A cat description',
  },
  {
    id: '021',
    name: 'Lizard',
    description: 'A lizard description',
  },
  {
    id: '022',
    name: 'Crocodile',
    description: 'A crocodile description',
  },
  {
    id: '023',
    name: 'Tortoise',
    description: 'A tortoise description',
  },
  {
    id: '024',
    name: 'Elephant',
    description: 'An elephant description',
  },
  {
    id: '025',
    name: 'Camel',
    description: 'A camel description',
  },
  {
    id: '026',
    name: 'Sparrow',
    description: 'A sparrow description',
  },
];

const colors: string[] = [
  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark',
];

export default ({ onSelect }: Props) => {
  const [query, setQuery] = React.useState<string>('');

  return (
    <>
      <div className="form-group">
        <div className="row">
          <div className="col-12">
            <input
              id="animal-select-form-query"
              type="text"
              className="form-control"
              placeholder="Search for animal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {FilterableList(mockAnimals, 'name', query).map(
            (animal, index) => (
              <span
                role="button"
                tabIndex={0}
                className={`mr-1 badge badge-${colors[(index % colors.length)]}`}
                onClick={() => onSelect(animal)}
                onKeyPress={() => onSelect(animal)}
              >
                {animal.name}
              </span>
            ),
          )}
        </div>
      </div>
    </>
  );
};
