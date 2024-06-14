// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
  SearchBox,
  Configure,
} from 'react-instantsearch';

// eslint-disable-next-line import/no-extraneous-dependencies
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import { Search, Loader2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const searchClient = algoliasearch(
  '0GE2DBWPHV',
  '142ec948c619bf049c6257b228f30a52'
);

function Hit({ hit }: { hit: any }) {
  const { id } = hit;
  return (
    <article className="my-2">
      <Link href={`/labs/${id}`}>
        <Card className="hover:bg-secondary">
          <CardHeader>
            <CardTitle className="text-sm">
              <Highlight attribute="name" hit={hit} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <Snippet hit={hit} attribute="description" />
          </CardContent>
        </Card>
      </Link>
    </article>
  );
}

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative ml-auto flex-1 md:grow-0 mt-5">
          <Search className="absolute left-2.5 top-4 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search labs ..."
            className="w-full rounded-lg bg-secondary pl-8 md:w-[400px] h-[50px] lg:w-[600px]"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader />
        <InstantSearch indexName="labs" searchClient={searchClient}>
          <SearchBox
            queryHook={(query, search) => {
              search(query);
            }}
            placeholder="Search labs ..."
            // eslint-disable-next-line react/no-unstable-nested-components
            resetIconComponent={({ classNames }) => (
              <div className={classNames.resetIcon} />
            )}
            // eslint-disable-next-line react/no-unstable-nested-components
            loadingIconComponent={({ classNames }) => (
              <div className={classNames.loadingIcon}>
                <Loader2 className="animate-spin" />
              </div>
            )}
            classNames={{
              root: 'p-3',
              form: 'relative',
              input:
                'block w-full pl-9 pr-3 py-2 text-secondary-foreground bg-secondary border focus:outline-none focus:border-primary focus:ring-primary-500 rounded-md focus:ring-1',
              submitIcon: 'absolute top-3 left-2 bottom-0 h-4 w-4',
              loadingIcon: 'h-4 w-4',
            }}
          />
          {true && (
            <>
              <Configure analytics={false} hitsPerPage={3} />
              <Hits hitComponent={Hit} />
            </>
          )}
        </InstantSearch>
      </DialogContent>
    </Dialog>
  );
}
