import { ContentSeparator } from '../ui/content-seperator'
import { ClientSection } from './components/Client'
import { ImportSelect } from './components/ImportSelect'
import { FileUpload } from './components/FileUpload'
import { ElapsedData } from './components/ElapsedData'
import { ToleranceWindowToggle } from './components/ToleranceWindowToggle'
import { SplitSchedule } from './components/SplitSchedule'
import { LocationChecking } from './components/LocationChecking'

export function LeftForm() {
  return (
    <div className="flex flex-col gap-5 p-5 flex-1">
      <ImportSelect />
      <ContentSeparator />
      <FileUpload />
      <ElapsedData />
      <ToleranceWindowToggle />
    </div>
  )
}

export function RightForm() {
  return (
    <div className="flex flex-col gap-5 p-5 flex-1">
      <SplitSchedule />
      <ContentSeparator />
      <LocationChecking />
      <ContentSeparator />
      <ClientSection />
    </div>
  )
}

export function Mainform() {
  return (
    <div className="flex p-5 gap-5">
      <LeftForm />
      <RightForm />
    </div>
  )
}
