import { Button } from '@/components/ui/button'
import { useDropzone } from 'react-dropzone'
import { FileTextIcon } from '@radix-ui/react-icons'
import { Progress } from '@/components/ui/progress'
import prettyBytes from 'pretty-bytes'
import { useState } from 'react'

export function FileUpload() { 
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({multiple: false, onDrop: (files) => {
    const fileSize = convertMemoryToPercentage(Number(files[0].size))
    setFileSize(fileSize)
  }})
  const [fileSize, setFileSize] = useState(0)


  const convertMemoryToPercentage = (memory: number): number => {
    const tenMegabytesInBytes = 10000000 
    console.log(memory, tenMegabytesInBytes)
    console.log((memory / tenMegabytesInBytes))
    console.log((memory / tenMegabytesInBytes) * 100)
    return memory >= tenMegabytesInBytes ? 100 : ((memory / tenMegabytesInBytes) * 100) 
  }

  return (    
    <>
      <p className="font-bold">Select a manifest you'd like to import</p>
      <div className="border-2 border-gray-300 flex-1 rounded-md p-3 flex flex-col gap-3">
        <div
          {...getRootProps({className: 'dropzone'})}
          className="border-2 rounded-md border-gray-400 p-2 h-36 border-dashed flex flex-col gap-3 justify-center items-center">
          <input {...getInputProps()} />
          <FileTextIcon className="text-amber-500 h-8 w-8" />
          <p>Drag & Drop Here Or <span className="font-bold">Browse</span></p>
        </div>
        <Button className="bg-blue-900 text-white font-bold w-1/2 mx-auto hover:bg-amber-500">Upload Manifest</Button>
      </div>
      {acceptedFiles.map(file => 
        <div className="p-3 border-t-2 border-b-2 flex gap-2" key={file.name.concat(file.size.toString())}>
          <FileTextIcon className="text-amber-500 h-8 w-8"/>
          <div className="flex flex-col flex-1">
            <div className="flex w-full items-baseline">
              <p className="text-gray-400">{file.name}</p>
              <div className="flex-1"/>
              <p className="text-gray-600">{prettyBytes(file.size, {space: false})}</p>
            </div>
            <div>
              <Progress value={fileSize} className="h-1" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

