<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:scope-discipline-rules -->
# Scope Discipline

- Only modify files that are explicitly mentioned in the user's instruction.
- Never create new files, new components, or redesign/refactor existing components as part of a task, unless the user specifically asked for it.
- Do not make "improvements" beyond what was requested — even if it seems helpful.
- If you think another file needs improvement or a new component would help, STOP and propose it to the user first. Do not implement it until the user approves.
- Before finishing a task, list exactly which files you changed and confirm none of them were outside the requested scope.
<!-- END:scope-discipline-rules -->

