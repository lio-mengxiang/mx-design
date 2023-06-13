type IMiddleware = {
  name: string;
  fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>;
};

/**
 * asynchronous function composition, whether to call the next function is completely determined by the middleware itself
 * @param middleware middleware
 */
export function compose(middleware: IMiddleware[]) {
  let middlewareData: Record<string, any> = {};
  async function dispatch(index: number) {
    if (index === middleware.length) return;
    const { name, fn } = middleware[index];
    const data = await fn({
      middlewareData,
      next: () => {
        dispatch(++index);
      },
    });
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
  }
  dispatch(0);
}
