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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useAppDispatch } from "@/redux/hook"
import { addTask } from "@/redux/features/task/taskSlice"
import { ITask } from "@/types/types"

export function AddTaskModel() {

    const form = useForm();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data);
        dispatch(addTask(data as ITask))
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
        <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
    <SelectItem value="High">High</SelectItem>
    <SelectItem value="Medium">Medium</SelectItem>
    <SelectItem value="Low">Low</SelectItem>
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
