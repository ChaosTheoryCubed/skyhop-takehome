import { Button } from '@/components/ui/button'

export function Footer() {
  return(
    <div className="flex flex-col w-full justify-center items-center w-1/2 mx-auto">
      <p className="font-bold">Data in the import file is correct. Please press Continue to import.</p>
      <div className="flex gap-3 p-3 w-4/5">
        <Button variant="outline" size="icon" className="flex-1 bg-blue-900 text-white hover:text-white hover:bg-amber-500">Continue Report</Button>
        <Button variant="outline" size="icon" className="flex-1 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">Cancel Report</Button>
      </div>
    </div>
  )
}
