export class CommandHandlerNotFoundException {
  constructor(
    public readonly commandName: string,
    public readonly message = `CommandHandler for ${commandName} not found!`,
  ) {}
}
