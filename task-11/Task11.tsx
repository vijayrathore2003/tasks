import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TodoCard from "./TodoCard"


const queryClient = new QueryClient()

function Task11() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <TodoCard />
      </QueryClientProvider>
    </div>
  )
}

export default Task11