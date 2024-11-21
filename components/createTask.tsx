'use client';
import { MixerVerticalIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Dispatch, SetStateAction, useState } from 'react';
import { useBoard } from '@/app/hooks/board/useBoard';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  task: z.string().min(2, { message: 'Enter at least 2 characters' }).max(50),
  description: z.string().max(100),
});

export default function CreateTask({
  setShowForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
      description: '',
    },
  });
  const { dispatch } = useBoard();
  const [tag, setTag] = useState('Baja');

  function onSubmit({ task, description }: z.infer<typeof formSchema>) {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: Math.random().toString(),
        date: new Date().toDateString(),
        tag,
        description,
        task,
      },
    });
    setShowForm(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className='pb-3 font-bold'>Nueva tarea</CardHeader>
          <CardContent>
            <div className='flex items-end justify-between gap-3'>
              <FormField
                control={form.control}
                name='task'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Título</FormLabel>
                    <FormMessage className='w-full' />
                    <FormControl>
                      <Input autoFocus placeholder='Agrega un título' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={'outline'}>
                    <MixerVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-40'>
                  <DropdownMenuLabel>Prioridad</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className={cn(
                      'w-full cursor-pointer justify-between px-3 focus:bg-red-50 focus:text-red-500',
                    )}
                    onClick={() => setTag('Alta')}
                  >
                    Alta <span>!!!</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      'w-full cursor-pointer justify-between px-3 focus:bg-yellow-50 focus:text-yellow-500',
                    )}
                    onClick={() => setTag('Media')}
                  >
                    Media <span>!!</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      'w-full cursor-pointer justify-between px-3 focus:bg-green-50 focus:text-green-500',
                    )}
                    onClick={() => setTag('Baja')}
                  >
                    Baja <span>!</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='mt-2'>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Descripción de la tarea' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='mt-5 flex gap-3'>
              <Button
                onClick={() => setShowForm(false)}
                type='button'
                className='w-full'
                variant={'secondary'}
              >
                Cancelar
              </Button>
              <Button className='w-full' type='submit'>
                Guardar
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
