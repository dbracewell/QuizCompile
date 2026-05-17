import { Link } from '@tanstack/react-router'

export const QuizCompileLogo = ({ linkTo }: { linkTo: '/' }) => {
  return (
    <Link to={linkTo} className="flex items-center gap-1 select-none">
      <img src="/QuizCompile.png" alt="QuizCompile" height={32} width={32} />
      <div className="flex items-center font-bold text-lg">
        <span className="text-blue-600">Quiz</span>
        <span className="text-muted-foreground">Compile</span>
      </div>
    </Link>
  )
}
