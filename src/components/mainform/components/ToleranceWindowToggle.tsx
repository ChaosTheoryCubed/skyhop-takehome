import { ClockIcon } from '@radix-ui/react-icons'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function ToleranceWindowToggle() {
  return (
    <>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="tolerance-window" />
          <Label className="flex gap-2" htmlFor="tolerance-window">Toggle ON | <ClockIcon className="w-4 h-4" /> Select Tolerance Level</Label>
        </div>
      </div>
    </>
  )
}
