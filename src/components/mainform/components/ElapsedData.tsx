import { ContentSeparator } from '@/components/ui/content-seperator'

export function ElapsedData() {
  return (
    <div>
      <ContentSeparator />
      <div className="font-bold py-3 text-sm">
        <p className="text-blue-900">Elapsed Data Checking:</p>
        <p className="text-green-500">No Elapsed Dates!</p>
      </div>
      <ContentSeparator />
    </div>
  )
}
