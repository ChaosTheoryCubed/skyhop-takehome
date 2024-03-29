import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

export function ImportSelect() {
  return (
     <Select>
      <SelectTrigger className="w-full font-bold border border-gray-400">
        <SelectValue className="text-xl font-bold text-blue-500" placeholder="Select Import Name:" />
      </SelectTrigger>
      <SelectContent className="border border-gray-400">
        <SelectItem className="hover:cursor-pointer" value="import1">Import Item 1</SelectItem>
        <SelectItem className="hover:cursor-pointer" value="import2">Import Item 2</SelectItem>
        <SelectItem className="hover:cursor-pointer" value="import3">Import Item 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
