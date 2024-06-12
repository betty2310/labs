import { Loader2 } from 'lucide-react';

const CircileLoading = () => {
  return (
    <div className="flex items-center min-h-screen justify-center w-full h-full">
      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      <p className="text-sm text-muted-foreground">Loading</p>
    </div>
  );
};

export default CircileLoading;
