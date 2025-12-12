import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTodo, editTodo, getTodos } from "./apis/todo"
import Loader from "./Loader"


function TodoCard() {

    const queryClient = useQueryClient()

    const { data: Todos, isLoading: isTodosLoading, isError: TodosError } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos
    })

    const { mutate: mutateAddTodo, isPending: isAddPending, isError: isAddError, error: AddError, isSuccess: isAddSuccess } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })


    const { mutate: mutateEdit, isError: isEditError, error: EditError, isPending: IsEditPending, isSuccess: isEditSuccess } = useMutation({
        mutationFn: editTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    const handleAdd = () => {
        mutateAddTodo({
            todo: 'New Todo',
            completed: false,
            userId: 5
        })
    }

    const handleEdit = (action: string, info) => {
        if (action === "COMPLETED") {
            mutateEdit({
                completed: !info.completed,
            })
        }
    }

    if (isAddError) alert("Error while adding the todo")

    if (isEditSuccess) alert("Edited Successfully");
    if (isAddSuccess) alert("Added Successfully");

    return (
        <div className="w-full  flex items-center justify-center bg-teal-lightest font-sans">
            {
                (isAddPending || IsEditPending) && <Loader />
            }
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-3">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                        <button onClick={handleAdd} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:border-gray-400 hover:bg-teal">Add</button>
                    </div>
                </div>
                <div className="h-screen overflow-auto">
                    {
                        isTodosLoading &&
                        <div className="flex justify-center items-center mt-[50vh]">
                            <div className="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
                        </div>
                    }

                    {
                        TodosError && <p className="font-bold text-lg text-red-500 mx-auto block w-fit">Something went wrong</p>
                    }

                    {
                        !isTodosLoading && Todos && Todos.todos.map((info) => (
                            <div className="flex mb-4 items-center">
                                <p className="w-full text-grey-darkest">{info.todo}</p>
                                <button onClick={() => handleEdit('COMPLETED', info)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:border-gray-400 text-green border-green hover:bg-green">{info.completed ? 'Cancel' : 'Done'}</button>
                                <button onClick={() => handleEdit('REMOVE', info)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:border-gray-400 hover:bg-red">Remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoCard