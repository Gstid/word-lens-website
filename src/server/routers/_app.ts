import { router } from '../trpc';
import { demoRouter } from './demo';

export const appRouter = router({
  demo: demoRouter
});

// Export type definition for use in client
export type AppRouter = typeof appRouter;
