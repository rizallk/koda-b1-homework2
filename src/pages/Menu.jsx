import { useState } from 'react';
import menu from '../data/menu';
import Card from '../components/Card';

export default function Menu() {
  const [result, setResult] = useState(menu);
  const [searchName, setSearchName] = useState('');

  function handleSearchSubmit() {
    const filtered = menu.filter((v) =>
      v.name.toLowerCase().includes(searchName.toLowerCase()),
    );
    setResult(filtered);
  }

  function handleSearchInput(e) {
    const value = e.target.value;

    setSearchName(value);

    if (value === '') setResult(menu);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-red-700 mb-7">Menu</h1>

      <div className="my-6">
        <div className="flex gap-3 my-3">
          <input
            className="border border-red-700 rounded-md py-2 px-3 border-b-4 "
            type="search"
            placeholder="Search by name"
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearchSubmit() : null)}
            onChange={handleSearchInput}
          />
          <button
            onClick={handleSearchSubmit}
            className="bg-red-600 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-700 transition border-b-red-800 border-b-4 
          active:translate-y-1"
          >
            Search
          </button>
        </div>

        <hr className="text-gray-400 my-5" />

        {result.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
            {result.map((v, i) => {
              return (
                <Card className="bg-red-200" key={i}>
                  <img
                    src={v.image}
                    className="w-full h-auto rounded-lg mb-4"
                    alt={v.name}
                  />
                  <ul>
                    <li>{v.name}</li>
                    <li className="font-semibold">
                      Rp. {v.price.toLocaleString('id-ID')}
                    </li>
                    {v?.detail ? <li className="text-sm">{v.detail}</li> : null}
                  </ul>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center">Menu tidak ditemukan.</p>
        )}
      </div>
    </>
  );
}
