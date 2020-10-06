import * as React from 'react';
import { Animal } from '../../store/animals/types';

import FilterableList from './filterable-list';

interface Props {
  animals: Animal[];
  onSelect: (animal: Animal) => void;
}

const colors: string[] = [
  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark',
];

export default ({ animals, onSelect }: Props) => {
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
          {FilterableList(animals, 'name', query).map(
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
