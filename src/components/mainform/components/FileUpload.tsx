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
      <div className="flex flex-col flex-1 gap-3 p-3 rounded-md border-2 border-gray-300">
        <div
          {...getRootProps({className: 'dropzone'})}
          className="flex flex-col gap-3 justify-center items-center p-2 h-36 rounded-md border-2 border-gray-400 border-dashed">
          <input {...getInputProps()} />
          <FileTextIcon className="w-8 h-8 text-amber-500" />
          <p>Drag & Drop Here Or <span className="font-bold">Browse</span></p>
        </div>
        <Button className="mx-auto w-1/2 font-bold text-white bg-blue-900 hover:bg-amber-500">Upload Manifest</Button>
      </div>
      {acceptedFiles.map(file => 
        <div className="flex gap-2 p-3 border-t-2 border-b-2" key={file.name.concat(file.size.toString())}>
          <FileTextIcon className="w-8 h-8 text-amber-500"/>
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline w-full">
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

