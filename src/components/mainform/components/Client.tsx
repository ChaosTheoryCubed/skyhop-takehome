import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { ClockIcon } from '@radix-ui/react-icons'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function ClientRadioSection() {
  return (
    <RadioGroup className="flex items-center gap-5">
      <div className="flex items-center gap-1">
        <RadioGroupItem value="single" id="single" />
        <Label htmlFor="single">Single</Label>
      </div>
      <div className="flex items-center gap-1">
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
        <div key={x} className="flex items-center gap-20">
          <p className="text-sm">Testing Center {x}</p>
          <div className="flex gap-2 items-center">
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue className="font-normal text-xl text-blue-500" placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client1">Client 1</SelectItem>
                <SelectItem value="client2">Client 2</SelectItem>
                <SelectItem value="client3">Client 3</SelectItem>
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
