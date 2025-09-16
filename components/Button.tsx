import { ButtonProps } from "../interfaces"

const Button = ({ title, size = "medium", shape = "rounded-md" }: ButtonProps) => {
  // Map size props to Tailwind CSS classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  return (
    <button
      className={`
        bg-blue-500 text-white font-semibold 
        ${sizeClasses[size]} ${shape}
        hover:bg-blue-600 transition
      `}
    >
      {title}
    </button>
  )
}

export default Button
