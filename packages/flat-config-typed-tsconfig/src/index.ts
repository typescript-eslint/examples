export interface GreetOptions {
  message: string;
  times: number;
}

export async function greet({ message, times }: GreetOptions) {
  for (let i = 0; i < times; i += 1) {
    await console.log(message);
  }
}
