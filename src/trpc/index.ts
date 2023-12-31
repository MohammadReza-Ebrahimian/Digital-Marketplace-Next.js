import { publicProcedure,router } from "./rpc";





export const appRouter = router({
    anyApiRoute: publicProcedure.query(()=>{
        return "hello"
    })
})

export type AppRouter = typeof appRouter;