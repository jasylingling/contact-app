import SearchFilter from './SearchFilter';

function Header({ title, setFilterString }) {
  return (
    <header>
      <h1 className="text-3xl font-bold text-purple-400 my-8">
        {title}
      </h1>
      <SearchFilter setFilterString={setFilterString} />
    </header>
  );
}

export default Header;
