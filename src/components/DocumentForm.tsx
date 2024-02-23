import {FieldApi, useForm} from "@tanstack/react-form"
import {FormEvent} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DialogClose} from "@/components/ui/dialog.tsx";
import {z} from "zod"
import { zodValidator } from "@tanstack/zod-form-adapter"

type DocumentImports = {
  id: string
  name: string
}

type Document = {
  documentImport: string
}

const documentImports: DocumentImports[]  = [
  { id: "import1", name: "Import Document 1" },
  { id: "import2", name: "Import Document 2" },
  { id: "import3", name: "Import Document 3" },
]

// eslint-disable-next-line
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
	return (
		<>
			{field.state.meta.touchedErrors ? (
				<em>{field.state.meta.touchedErrors}</em>
			) : null}
			{field.state.meta.isValidating ? 'Validating...' : null}
		</>
	)
}

export function DocumentForm() {
  const form = useForm<Document>(
    {
      defaultValues: {
        documentImport: "",
      },
      onSubmit: async ( { value } ) => {
				await new Promise(resolve => setTimeout(resolve, 3000))
        console.log(value)
      }
    }
  )

  return (
    <div>
      <form.Provider>
				<form
					onSubmit={(e: FormEvent) => {
						e.preventDefault()
						e.stopPropagation()
						void form.handleSubmit()
					}}
				>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<form.Field
								validatorAdapter={zodValidator}
								name="documentImport"
								validators={{
									onChange: z
										.string()
										.min(1, "Required")
								}}
								children={(field) => {
								return (
									<div>
										<Select onValueChange={(val) => field.handleChange(val)}>
											<SelectTrigger className="w-full font-bold border border-gray-400">
												<SelectValue className="text-xl font-bold text-blue-500" placeholder="Select Import Name:"/>
											</SelectTrigger>
											<SelectContent className="border border-gray-400">
												{documentImports.map(document =>
													<SelectItem key={document.id} className="hover:cursor-pointer"
																			value={document.id}>{document.name}</SelectItem>
												)}
											</SelectContent>
										</Select>
										<FieldInfo field={field} />
									</div>
								)
							}}/>
						</div>
						<div>

						</div>
					</div>
					<div className="h-8" />
					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
						children={([canSubmit, isSubmitting]) => {
							return (
								<div className="flex flex-col justify-center items-center w-1/2 mx-auto">
									<p className="font-bold">Data in the import file is correct. Please press Continue to import.</p>
									<div className="flex gap-3 p-3 w-4/5">
										<Button variant="outline" size="icon"
														className="flex-1 bg-blue-900 text-white hover:text-white hover:bg-amber-500">
											{isSubmitting ? "..." : "Continue Report"}
										</Button>
										<DialogClose asChild>
											<Button variant="outline" size="icon"
															className="flex-1 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">Cancel
												Report</Button>
										</DialogClose>
									</div>
								</div>
							)
						}}
					/>
				</form>
			</form.Provider>
		</div>
	)
}