import {Dialog, DialogTrigger, DialogContent, DialogClose, DialogHeader} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {Cross1Icon} from "@radix-ui/react-icons";
import {DocumentForm} from "@/components/DocumentForm.tsx";

function Title() {
  return (
    <div className="flex p-3 items-center justify-center">
      <h1 className="text-4xl font-bold border-b-4 border-gray-300 pb-5">Document Upload</h1>
    </div>
  )
}

function CloseButton() {
  return (
    <DialogClose asChild className="flex p-3 items-start">
      <Button variant="outline" size="icon"
              className="flex bg-blue-900 text-white hover:text-white hover:bg-amber-500">
        <Cross1Icon className="text-2xl"/>
      </Button>
    </DialogClose>
  )
}

export function DocumentFormModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Build Document</Button>
      </DialogTrigger>
      <DialogContent  className="font-display bg-white text-blue-900 p-6 rounded-3xl max-w-5xl">
        <DialogHeader>
          <CloseButton/>
          <Title />
        </DialogHeader>
				<DocumentForm />
      </DialogContent>
    </Dialog>
  )
}