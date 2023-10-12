interface Props {
  content?: string
  className?: string
  type: 'button' | 'submit' | 'reset' | undefined
}
const PrimaryButton = ({ content, className, type }: Props) => {
  return (
    <button
      type={type}
      className={`rounded-lg bg-blue-500 text-white hover:bg-blue-600 myBlueshadow ${className}`}
    >
      {content}
    </button>
  )
}

export default PrimaryButton
