import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { ClockIcon } from '@radix-ui/react-icons'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function ClientRadioSection() {
  return (
    <RadioGroup className="flex gap-5 items-center">
      <div className="flex gap-1 items-center">
        <RadioGroupItem value="single" id="single" />
        <Label htmlFor="single">Single</Label>
      </div>
      <div className="flex gap-1 items-center">
        <RadioGroupItem value="multiple" id="multiple" />
        <Label htmlFor="multiple">Multiple</Label>
      </div>
    </RadioGroup>
  )
}

function ClientSelectSection() {
  const clientCount = [1, 2, 3, 4] // A roundabout way of forcing a loop

  return (
    <>
      {clientCount.map(x => (
        <div key={x} className="flex gap-20 items-center">
          <p className="text-sm">Testing Center {x}</p>
          <div className="flex gap-2 items-center">
            <Select>
              <SelectTrigger className="w-32 border border-gray-400">
                <SelectValue className="text-xl font-normal text-blue-500" placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent className="border border-gray-400">
                <SelectItem className="hover:cursor-pointer" value="client1">Client 1</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="client2">Client 2</SelectItem>
                <SelectItem className="hover:cursor-pointer" value="client3">Client 3</SelectItem>
              </SelectContent>
            </Select>
            <ClockIcon className="w-6 h-6" />
          </div>
        </div>
      ))}
    </>
  )
}

export function ClientSection() {
  return(
      <div className="flex flex-col gap-3">
        <p className="font-bold">Client:</p>
        <ClientRadioSection />
        <div className="flex flex-col gap-2">
          <ClientSelectSection />
        </div>
      </div>
  )
}
