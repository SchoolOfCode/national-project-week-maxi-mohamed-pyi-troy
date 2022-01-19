import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";

const Library = () => {
  return (
    <div className="LibraryContainer">
      <SearchBar />
      <button>Add to library</button>
      <NewResourceForm />
      <LibraryResult />
    </div>
  );
};

export default Library;