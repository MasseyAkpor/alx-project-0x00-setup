import Button from "../components/button"

const Landing = () => {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Small buttons */}
      <Button title="Small - Rounded Sm" size="small" shape="rounded-sm" />
      <Button title="Small - Rounded Md" size="small" shape="rounded-md" />
      <Button title="Small - Rounded Full" size="small" shape="rounded-full" />

      {/* Medium buttons */}
      <Button title="Medium - Rounded Sm" size="medium" shape="rounded-sm" />
      <Button title="Medium - Rounded Md" size="medium" shape="rounded-md" />
      <Button title="Medium - Rounded Full" size="medium" shape="rounded-full" />

      {/* Large buttons */}
      <Button title="Large - Rounded Sm" size="large" shape="rounded-sm" />
      <Button title="Large - Rounded Md" size="large" shape="rounded-md" />
      <Button title="Large - Rounded Full" size="large" shape="rounded-full" />
    </main>
  )
}

export default Landing
