export interface GreetOptions {
  message: string;
  times: number;
}

export function greet({ message, times }: GreetOptions) {
  for (var i = 0; i < times; i += 1) {
    console.log(message);
  }
}
