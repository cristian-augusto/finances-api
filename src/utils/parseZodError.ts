import { ZodError } from 'zod';

const parseZodError = (error: ZodError) => {
  const messages: string[] = [];
  for (const issue of error.issues) {
    messages.push(`[${issue.path.join('.')}] ${issue.message}`);
  }

  return messages.join('\n');
};

export default parseZodError;
