import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function SplitSchedule() {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">Split schedule using social distancing?</p>
      <RadioGroup className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <RadioGroupItem value="yes" id="yes" />
          <Label htmlFor="yes">Yes</Label>
        </div>
        <div className="flex items-center gap-1">
          <RadioGroupItem value="no" id="no" />
          <Label htmlFor="no">No</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
