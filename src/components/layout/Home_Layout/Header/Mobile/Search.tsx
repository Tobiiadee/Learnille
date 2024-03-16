/** @format */
import { SearchV } from "@/assets/svg/HeaderSVG";
import Mobile_Pop from "@/components/ui/Mobile_Pop/Mobile_Pop";
import Modal from "@/components/ui/Modal/Modal";

type SearchType = {
  closeSearch: () => void;
}

export default function Search({closeSearch}: SearchType) {
  return (
    <Modal onClick={closeSearch}>
      <Mobile_Pop>
        <main className='w-96 h-72 bg-white flex flex-col gap-4 py-4 px-3 rounded-md'>
          <div className="flex gap-2 items-center w-full h-10 border-b border-text border-dotted">
            <span>
              <SearchV />
            </span>
            <div className='w-full'>
              <input
                type='text'
                id='search'
                className='border-none w-60 outline-none text-sm placeholder:text-sm'
                placeholder='Search...'
              />
            </div>

            <div className="bg-background text-xs rounded-md px-1 py-1 font-normal">
              <button type="button" onClick={closeSearch}>esc</button>
            </div>
          </div>

          <div className="w-full h-40 border-b border-text border-dotted">
            <h2>Recent Search</h2>
          </div>
        </main>
      </Mobile_Pop>
    </Modal>
  );
}
