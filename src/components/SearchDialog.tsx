import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
  SearchBox
} from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const searchClient = algoliasearch('0GE2DBWPHV', '142ec948c619bf049c6257b228f30a52');

function Hit({ hit }: { hit: any }) {
  const id = hit.id
  return (
    <article>
      <h1>
        <Link href={`/labs/${id}`}>
          <Highlight attribute="name" hit={hit} />
          {/* <Highlight attribute="description" hit={hit} /> */}
        </Link>
      </h1>
      <Snippet hit={hit} attribute="description" />
    </article>
  );
}
export default function SearchDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <InstantSearch indexName="labs" searchClient={searchClient}>
            <SearchBox
              classNames={{
                root: 'p-3 shadow-sm',
                form: 'relative',
                input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1',
                submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
              }}
            />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </DialogContent>
      </Dialog>

    </>
  );
}