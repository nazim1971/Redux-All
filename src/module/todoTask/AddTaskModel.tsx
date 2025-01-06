import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

export function AddTaskModel() {

    const form = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to add task
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          
        </DialogHeader>
        <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
         <Input {...field} value={field.value || ''} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
        <FormField
    control={form.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ''} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
        <FormField
    control={form.control}
    name="dueDate"
    render={({field}) => (
      <FormItem>
        <FormLabel>Due data</FormLabel>
        <FormControl>
         <Textarea {...field} value={field.value || ''} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />    
        <FormField
    control={form.control}
    name="priority"
    render={({field}) => (
      <FormItem>
        <FormLabel>Priority</FormLabel>
        <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        
        </Form>

        
      </DialogContent>
    </Dialog>
  )
}
