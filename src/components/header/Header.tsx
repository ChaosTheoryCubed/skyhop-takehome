import { Cross1Icon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <>
      <div className="flex p-3 items-start">
        <Button variant="outline" size="icon" className="bg-blue-900 text-white hover:text-white hover:bg-amber-500">
          <Cross1Icon className="h-8 w-8" />
        </Button>
      </div>
      <div className="flex p-3 items-center justify-center">
        <h1 className="text-4xl font-bold border-b-4 pb-5">Document Upload</h1>
      </div>
    </>
  )
}
