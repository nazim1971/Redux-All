import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import {  PenBox } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import {  IUser } from "@/types/types"
import { addUser, selectUser } from "@/redux/features/user/userSlice"

interface AddUserModelProps {
  user?: IUser; // Optional task prop for editing
}


export function AddUserModel({ user }: AddUserModelProps) {
  
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues: {
      name: user?.name || ''
    }
  });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
     
        dispatch(addUser(data as IUser));
      
    };

  return (
   <Dialog>
      <DialogTrigger asChild>
        {user ? <PenBox /> : <Button>Add Task</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          {user ? "Edit this user" : "Fill up this form to add user"}
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>{user ? "Edit user" : "Add user"}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <DialogFooter>
              <DialogClose asChild >
              <Button type="submit">{user ? "Add user" : "Update user"}</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
