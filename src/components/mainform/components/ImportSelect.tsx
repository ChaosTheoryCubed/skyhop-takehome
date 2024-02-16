import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

export function ImportSelect() {
  return (
     <Select>
      <SelectTrigger className="w-full font-bold">
        <SelectValue className="font-bold text-xl text-blue-500" placeholder="Select Import Name:" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="import1">Import Item 1</SelectItem>
        <SelectItem value="import2">Import Item 2</SelectItem>
        <SelectItem value="import3">Import Item 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
